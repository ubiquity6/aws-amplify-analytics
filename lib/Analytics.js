"use strict";
/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@aws-amplify/core");
var AWSPinpointProvider_1 = require("./Providers/AWSPinpointProvider");
var trackers_1 = require("./trackers");
var logger = new core_1.ConsoleLogger('AnalyticsClass');
var AMPLIFY_SYMBOL = ((typeof Symbol !== 'undefined' && typeof Symbol.for === 'function') ?
    Symbol.for('amplify_default') : '@@amplify_default');
var dispatchAnalyticsEvent = function (event, data, message) {
    core_1.Hub.dispatch('analytics', { event: event, data: data, message: message }, 'Analytics', AMPLIFY_SYMBOL);
};
var trackers = {
    'pageView': trackers_1.PageViewTracker,
    'event': trackers_1.EventTracker,
    'session': trackers_1.SessionTracker
};
/**
* Provide mobile analytics client functions
*/
var AnalyticsClass = /** @class */ (function () {
    /**
     * Initialize Analtyics
     * @param config - Configuration of the Analytics
     */
    function AnalyticsClass() {
        this._config = {};
        this._pluggables = [];
        this._disabled = false;
        this._trackers = {};
        this.record = this.record.bind(this);
    }
    AnalyticsClass.prototype.getModuleName = function () {
        return 'Analytics';
    };
    /**
     * configure Analytics
     * @param {Object} config - Configuration of the Analytics
     */
    AnalyticsClass.prototype.configure = function (config) {
        var _this = this;
        if (!config)
            return this._config;
        logger.debug('configure Analytics', config);
        var amplifyConfig = core_1.Parser.parseMobilehubConfig(config);
        this._config = Object.assign({}, this._config, amplifyConfig.Analytics, config);
        if (this._config['disabled']) {
            this._disabled = true;
        }
        this._pluggables.forEach(function (pluggable) {
            // for backward compatibility
            var providerConfig = pluggable.getProviderName() === 'AWSPinpoint' && !_this._config['AWSPinpoint'] ?
                _this._config : _this._config[pluggable.getProviderName()];
            pluggable.configure(__assign({ disabled: _this._config['disabled'] }, providerConfig));
        });
        if (this._pluggables.length === 0) {
            this.addPluggable(new AWSPinpointProvider_1.default());
        }
        // turn on the autoSessionRecord if not specified
        if (this._config['autoSessionRecord'] === undefined) {
            this._config['autoSessionRecord'] = true;
        }
        dispatchAnalyticsEvent('configured', null, "The Analytics category has been configured successfully");
        logger.debug('current configuration', this._config);
        return this._config;
    };
    /**
     * add plugin into Analytics category
     * @param {Object} pluggable - an instance of the plugin
     */
    AnalyticsClass.prototype.addPluggable = function (pluggable) {
        if (pluggable && pluggable.getCategory() === 'Analytics') {
            this._pluggables.push(pluggable);
            // for backward compatibility
            var providerConfig = pluggable.getProviderName() === 'AWSPinpoint' && !this._config['AWSPinpoint'] ?
                this._config : this._config[pluggable.getProviderName()];
            var config = __assign({ disabled: this._config['disabled'] }, providerConfig);
            pluggable.configure(config);
            return config;
        }
    };
    /**
     * Get the plugin object
     * @param providerName - the name of the plugin
     */
    AnalyticsClass.prototype.getPluggable = function (providerName) {
        for (var i = 0; i < this._pluggables.length; i += 1) {
            var pluggable = this._pluggables[i];
            if (pluggable.getProviderName() === providerName) {
                return pluggable;
            }
        }
        logger.debug('No plugin found with providerName', providerName);
        return null;
    };
    /**
     * Remove the plugin object
     * @param providerName - the name of the plugin
     */
    AnalyticsClass.prototype.removePluggable = function (providerName) {
        var idx = 0;
        while (idx < this._pluggables.length) {
            if (this._pluggables[idx].getProviderName() === providerName) {
                break;
            }
            idx += 1;
        }
        if (idx === this._pluggables.length) {
            logger.debug('No plugin found with providerName', providerName);
            return;
        }
        else {
            this._pluggables.splice(idx, idx + 1);
            return;
        }
    };
    /**
     * stop sending events
     */
    AnalyticsClass.prototype.disable = function () {
        this._disabled = true;
    };
    /**
     * start sending events
     */
    AnalyticsClass.prototype.enable = function () {
        this._disabled = false;
    };
    /**
     * Record Session start
     * @return - A promise which resolves if buffer doesn't overflow
     */
    AnalyticsClass.prototype.startSession = function (provider) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                params = { event: { name: '_session.start' }, provider: provider };
                return [2 /*return*/, this._sendEvent(params)];
            });
        });
    };
    /**
     * Record Session stop
     * @return - A promise which resolves if buffer doesn't overflow
     */
    AnalyticsClass.prototype.stopSession = function (provider) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                params = { event: { name: '_session.stop' }, provider: provider };
                return [2 /*return*/, this._sendEvent(params)];
            });
        });
    };
    /**
     * Record one analytic event and send it to Pinpoint
     * @param {String} name - The name of the event
     * @param {Object} [attributs] - Attributes of the event
     * @param {Object} [metrics] - Event metrics
     * @return - A promise which resolves if buffer doesn't overflow
     */
    AnalyticsClass.prototype.record = function (event, provider, metrics) {
        return __awaiter(this, void 0, void 0, function () {
            var errMsg, params;
            return __generator(this, function (_a) {
                if (!this.isAnalyticsConfigured()) {
                    errMsg = 'Analytics has not been configured';
                    logger.debug(errMsg);
                    return [2 /*return*/, Promise.reject(new Error(errMsg))];
                }
                params = null;
                // this is just for compatibility, going to be deprecated
                if (typeof event === 'string') {
                    params = {
                        'event': {
                            name: event,
                            attributes: provider,
                            metrics: metrics
                        },
                        provider: 'AWSPinpoint'
                    };
                }
                else {
                    params = { event: event, provider: provider };
                }
                return [2 /*return*/, this._sendEvent(params)];
            });
        });
    };
    AnalyticsClass.prototype.updateEndpoint = function (attrs, provider) {
        return __awaiter(this, void 0, void 0, function () {
            var event;
            return __generator(this, function (_a) {
                event = Object.assign({ name: '_update_endpoint' }, attrs);
                return [2 /*return*/, this.record(event, provider)];
            });
        });
    };
    AnalyticsClass.prototype._sendEvent = function (params) {
        if (!this.isAnalyticsConfigured()) {
            var errMsg = 'Analytics has not been configured';
            logger.debug(errMsg);
            return Promise.reject(new Error(errMsg));
        }
        if (this._disabled) {
            logger.debug('Analytics has been disabled');
            return Promise.resolve();
        }
        var provider = params.provider ? params.provider : 'AWSPinpoint';
        this._pluggables.forEach(function (pluggable) {
            if (pluggable.getProviderName() === provider) {
                pluggable.record(params);
            }
        });
        return Promise.resolve();
    };
    AnalyticsClass.prototype.autoTrack = function (trackerType, opts) {
        if (!trackers[trackerType]) {
            logger.debug('invalid tracker type');
            return;
        }
        // to sync up two different configuration ways of auto session tracking
        if (trackerType === 'session') {
            this._config['autoSessionRecord'] = opts['enable'];
        }
        var tracker = this._trackers[trackerType];
        if (!tracker) {
            this._trackers[trackerType] = new (trackers[trackerType])(this.record, opts);
        }
        else {
            tracker.configure(opts);
        }
    };
    AnalyticsClass.prototype.isAnalyticsConfigured = function () {
        return this._config && Object.entries(this._config).length > 0;
    };
    return AnalyticsClass;
}());
exports.default = AnalyticsClass;
//# sourceMappingURL=Analytics.js.map