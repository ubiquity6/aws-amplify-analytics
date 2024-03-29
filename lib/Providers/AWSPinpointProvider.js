"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var core_1 = require("@aws-amplify/core");
var MobileAnalytics = require("aws-sdk/clients/mobileanalytics");
var Pinpoint = require("aws-sdk/clients/pinpoint");
var cache_1 = require("@aws-amplify/cache");
var uuid_1 = require("uuid");
var AMPLIFY_SYMBOL = ((typeof Symbol !== 'undefined' && typeof Symbol.for === 'function') ?
    Symbol.for('amplify_default') : '@@amplify_default');
var dispatchAnalyticsEvent = function (event, data) {
    core_1.Hub.dispatch('analytics', { event: event, data: data }, 'Analytics', AMPLIFY_SYMBOL);
};
var logger = new core_1.ConsoleLogger('AWSPinpointProvider');
var NON_RETRYABLE_EXCEPTIONS = ['BadRequestException', 'SerializationException', 'ValidationException'];
// events buffer
var BUFFER_SIZE = 1000;
var FLUSH_SIZE = 100;
var FLUSH_INTERVAL = 5 * 1000; // 5s
var RESEND_LIMIT = 5;
// params: { event: {name: , .... }, timeStamp, config, resendLimits }
var AWSPinpointProvider = /** @class */ (function () {
    function AWSPinpointProvider(config) {
        this._buffer = [];
        this._config = config ? config : {};
        this._config.bufferSize = this._config.bufferSize || BUFFER_SIZE;
        this._config.flushSize = this._config.flushSize || FLUSH_SIZE;
        this._config.flushInterval = this._config.flushInterval || FLUSH_INTERVAL;
        this._config.resendLimit = this._config.resendLimit || RESEND_LIMIT;
        this._clientInfo = core_1.ClientDevice.clientInfo();
    }
    AWSPinpointProvider.prototype._setupTimer = function () {
        var _this = this;
        if (this._timer) {
            clearInterval(this._timer);
        }
        var _a = this._config, flushSize = _a.flushSize, flushInterval = _a.flushInterval;
        var that = this;
        this._timer = setInterval(function () {
            var size = _this._buffer.length < flushSize ? _this._buffer.length : flushSize;
            for (var i = 0; i < size; i += 1) {
                var params = _this._buffer.shift();
                that._sendFromBuffer(params);
            }
        }, flushInterval);
    };
    /**
     * @private
     * @param params - params for the event recording
     * Put events into buffer
     */
    AWSPinpointProvider.prototype._putToBuffer = function (params) {
        var bufferSize = this._config.bufferSize;
        if (this._buffer.length < bufferSize) {
            this._buffer.push(params);
            return Promise.resolve(true);
        }
        else {
            logger.debug('exceed analytics events buffer size');
            return Promise.reject(false);
        }
    };
    AWSPinpointProvider.prototype._sendFromBuffer = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var event, config, appId, region, resendLimit, success, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        event = params.event, config = params.config;
                        appId = config.appId, region = config.region, resendLimit = config.resendLimit;
                        success = true;
                        _a = event.name;
                        switch (_a) {
                            case '_session.start': return [3 /*break*/, 1];
                            case '_session.stop': return [3 /*break*/, 3];
                            case '_update_endpoint': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, this._startSession(params)];
                    case 2:
                        success = _b.sent();
                        return [3 /*break*/, 9];
                    case 3: return [4 /*yield*/, this._stopSession(params)];
                    case 4:
                        success = _b.sent();
                        return [3 /*break*/, 9];
                    case 5: return [4 /*yield*/, this._updateEndpoint(params)];
                    case 6:
                        success = _b.sent();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this._recordCustomEvent(params)];
                    case 8:
                        success = _b.sent();
                        return [3 /*break*/, 9];
                    case 9:
                        if (!success) {
                            params.resendLimits = typeof params.resendLimits === 'number' ?
                                params.resendLimits : resendLimit;
                            if (params.resendLimits > 0) {
                                logger.debug("resending event " + params.eventName + " with " + params.resendLimits + " retry times left");
                                params.resendLimits -= 1;
                                this._putToBuffer(params);
                            }
                            else {
                                logger.debug("retry times used up for event " + params.eventName);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * get the category of the plugin
     */
    AWSPinpointProvider.prototype.getCategory = function () {
        return AWSPinpointProvider.category;
    };
    /**
     * get provider name of the plugin
     */
    AWSPinpointProvider.prototype.getProviderName = function () {
        return AWSPinpointProvider.providerName;
    };
    /**
     * configure the plugin
     * @param {Object} config - configuration
     */
    AWSPinpointProvider.prototype.configure = function (config) {
        var _this = this;
        logger.debug('configure Analytics', config);
        var conf = config ? config : {};
        this._config = Object.assign({}, this._config, conf);
        if (this._config['appId'] && !this._config['disabled']) {
            if (!this._config['endpointId']) {
                var cacheKey = this.getProviderName() + '_' + this._config['appId'];
                this._getEndpointId(cacheKey).then(function (endpointId) {
                    logger.debug('setting endpoint id from the cache', endpointId);
                    _this._config['endpointId'] = endpointId;
                    dispatchAnalyticsEvent('pinpointProvider_configured', null);
                }).catch(function (e) {
                    logger.debug('Failed to generate endpointId', e);
                });
            }
            else {
                dispatchAnalyticsEvent('pinpointProvider_configured', null);
            }
            this._setupTimer();
        }
        else {
            if (this._timer) {
                clearInterval(this._timer);
            }
        }
        return this._config;
    };
    /**
     * record an event
     * @param {Object} params - the params of an event
     */
    AWSPinpointProvider.prototype.record = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var credentials, timestamp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getCredentials()];
                    case 1:
                        credentials = _a.sent();
                        if (!credentials || !this._config['appId'] || !this._config['region']) {
                            logger.debug('cannot send events without credentials, applicationId or region');
                            return [2 /*return*/, Promise.resolve(false)];
                        }
                        timestamp = new Date().getTime();
                        // attach the session and eventId
                        this._generateSession(params);
                        params.event.eventId = uuid_1.v1();
                        Object.assign(params, { timestamp: timestamp, config: this._config, credentials: credentials });
                        // temporary solution, will refactor in the future
                        if (params.event.immediate) {
                            return [2 /*return*/, this._send(params)];
                        }
                        else {
                            return [2 /*return*/, this._putToBuffer(params)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AWSPinpointProvider.prototype._generateSession = function (params) {
        this._sessionId = this._sessionId || uuid_1.v1();
        var event = params.event;
        switch (event.name) {
            case '_session.start':
                // refresh the session id and session start time
                this._sessionStartTimestamp = new Date().getTime();
                this._sessionId = uuid_1.v1();
                event.session = {
                    Id: this._sessionId,
                    StartTimestamp: new Date(this._sessionStartTimestamp).toISOString()
                };
                break;
            case '_session.stop':
                var stopTimestamp = new Date().getTime();
                this._sessionStartTimestamp = this._sessionStartTimestamp || new Date().getTime();
                this._sessionId = this._sessionId || uuid_1.v1();
                event.session = {
                    Id: this._sessionId,
                    Duration: stopTimestamp - this._sessionStartTimestamp,
                    StartTimestamp: new Date(this._sessionStartTimestamp).toISOString(),
                    StopTimestamp: new Date(stopTimestamp).toISOString()
                };
                this._sessionId = undefined;
                this._sessionStartTimestamp = undefined;
                break;
            default:
                this._sessionStartTimestamp = this._sessionStartTimestamp || new Date().getTime();
                this._sessionId = this._sessionId || uuid_1.v1();
                event.session = {
                    Id: this._sessionId,
                    StartTimestamp: new Date(this._sessionStartTimestamp).toISOString()
                };
                break;
        }
    };
    AWSPinpointProvider.prototype._send = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var event, config;
            return __generator(this, function (_a) {
                event = params.event, config = params.config;
                switch (event.name) {
                    case '_session.start':
                        return [2 /*return*/, this._startSession(params)];
                    case '_session.stop':
                        return [2 /*return*/, this._stopSession(params)];
                    case '_update_endpoint':
                        return [2 /*return*/, this._updateEndpoint(params)];
                    default:
                        return [2 /*return*/, this._recordCustomEvent(params)];
                }
                return [2 /*return*/];
            });
        });
    };
    AWSPinpointProvider.prototype._generateBatchItemContext = function (params) {
        var event = params.event, timestamp = params.timestamp, config = params.config, credentials = params.credentials;
        var name = event.name, attributes = event.attributes, metrics = event.metrics, eventId = event.eventId, session = event.session;
        var appId = config.appId, endpointId = config.endpointId;
        var endpointContext = {};
        var eventParams = {
            ApplicationId: appId,
            EventsRequest: {
                BatchItem: {}
            }
        };
        eventParams.EventsRequest.BatchItem[endpointId] = {};
        var endpointObj = eventParams.EventsRequest.BatchItem[endpointId];
        endpointObj['Endpoint'] = endpointContext;
        endpointObj['Events'] = {};
        endpointObj['Events'][eventId] = {
            EventType: name,
            Timestamp: new Date(timestamp).toISOString(),
            Attributes: attributes,
            Metrics: metrics,
            Session: session
        };
        return eventParams;
    };
    AWSPinpointProvider.prototype._pinpointPutEvents = function (eventParams) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                logger.debug('pinpoint put events with params', eventParams);
                return [2 /*return*/, new Promise(function (res, rej) {
                        var request = _this.pinpointClient.putEvents(eventParams);
                        // in order to keep backward compatiblity
                        // we are using a legacy api: /apps/{appid}/events/legacy
                        // so that users don't need to update their IAM Policy
                        // will use the formal one in the next break release
                        request.on('build', function () {
                            request.httpRequest.path = request.httpRequest.path + '/legacy';
                        });
                        request.send(function (err, data) {
                            if (err) {
                                logger.error('record event failed. ', err);
                                logger.warn('If you have not updated your Pinpoint IAM Policy' +
                                    ' with the Action: \"mobiletargeting:PutEvents\" yet, please do it.' +
                                    ' This action is not necessary for now' +
                                    ' but in order to avoid breaking changes in the future,' +
                                    ' please update it as soon as possible.');
                                res(false);
                            }
                            else {
                                logger.debug('record event success. ', data);
                                res(true);
                            }
                        });
                    })];
            });
        });
    };
    /**
     * @private
     * @param params
     */
    AWSPinpointProvider.prototype._startSession = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var event, timestamp, config, credentials, eventParams;
            return __generator(this, function (_a) {
                event = params.event, timestamp = params.timestamp, config = params.config, credentials = params.credentials;
                this._initClients(config, credentials);
                logger.debug('record session start');
                eventParams = this._generateBatchItemContext(params);
                return [2 /*return*/, this._pinpointPutEvents(eventParams)];
            });
        });
    };
    /**
     * @private
     * @param params
     */
    AWSPinpointProvider.prototype._stopSession = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var event, timestamp, config, credentials, eventParams;
            return __generator(this, function (_a) {
                event = params.event, timestamp = params.timestamp, config = params.config, credentials = params.credentials;
                this._initClients(config, credentials);
                logger.debug('record session stop');
                eventParams = this._generateBatchItemContext(params);
                return [2 /*return*/, this._pinpointPutEvents(eventParams)];
            });
        });
    };
    /**
     * @private
     * @param params
     */
    AWSPinpointProvider.prototype._recordCustomEvent = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var event, timestamp, config, credentials, eventParams;
            return __generator(this, function (_a) {
                event = params.event, timestamp = params.timestamp, config = params.config, credentials = params.credentials;
                this._initClients(config, credentials);
                logger.debug('record event with params');
                eventParams = this._generateBatchItemContext(params);
                return [2 /*return*/, this._pinpointPutEvents(eventParams)];
            });
        });
    };
    AWSPinpointProvider.prototype._updateEndpoint = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, config, credentials, event, appId, region, endpointId, request, update_params, that;
            var _this = this;
            return __generator(this, function (_a) {
                timestamp = params.timestamp, config = params.config, credentials = params.credentials, event = params.event;
                appId = config.appId, region = config.region, endpointId = config.endpointId;
                this._initClients(config, credentials);
                request = this._endpointRequest(config, core_1.JS.transferKeyToLowerCase(event, [], ['attributes', 'userAttributes', 'Attributes', 'UserAttributes']));
                update_params = {
                    ApplicationId: appId,
                    EndpointId: endpointId,
                    EndpointRequest: request
                };
                that = this;
                logger.debug('updateEndpoint with params: ', update_params);
                return [2 /*return*/, new Promise(function (res, rej) {
                        that.pinpointClient.updateEndpoint(update_params, function (err, data) {
                            if (err) {
                                logger.debug('updateEndpoint failed', err);
                                if (err.message.startsWith('Exceeded maximum endpoint per user count')) {
                                    _this._removeUnusedEndpoints(appId, request.User.UserId)
                                        .then(function () {
                                        logger.debug('Remove the unused endpoints successfully');
                                        return res(false);
                                    }).catch(function (e) {
                                        logger.warn("Failed to remove unused endpoints with error: " + e);
                                        logger.warn("Please ensure you have updated your Pinpoint IAM Policy " +
                                            "with the Action: \"mobiletargeting:GetUserEndpoints\" " +
                                            "in order to get endpoints info of the user");
                                        return res(false);
                                    });
                                }
                                return res(false);
                            }
                            else {
                                logger.debug('updateEndpoint success', data);
                                return res(true);
                            }
                        });
                    })];
            });
        });
    };
    AWSPinpointProvider.prototype._removeUnusedEndpoints = function (appId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (res, rej) {
                        _this.pinpointClient.getUserEndpoints({
                            ApplicationId: appId,
                            UserId: userId
                        }, function (err, data) {
                            if (err) {
                                logger.debug("Failed to get endpoints associated with the userId: " + userId + " with error", err);
                                return rej(err);
                            }
                            var endpoints = data.EndpointsResponse.Item;
                            logger.debug("get endpoints associated with the userId: " + userId + " with data", endpoints);
                            var endpointToBeDeleted = endpoints[0];
                            for (var i = 1; i < endpoints.length; i++) {
                                var timeStamp1 = Date.parse(endpointToBeDeleted['EffectiveDate']);
                                var timeStamp2 = Date.parse(endpoints[i]['EffectiveDate']);
                                // delete the one with invalid effective date
                                if (isNaN(timeStamp1))
                                    break;
                                if (isNaN(timeStamp2)) {
                                    endpointToBeDeleted = endpoints[i];
                                    break;
                                }
                                if (timeStamp2 < timeStamp1) {
                                    endpointToBeDeleted = endpoints[i];
                                }
                            }
                            // update the endpoint's user id with an empty string
                            var update_params = {
                                ApplicationId: appId,
                                EndpointId: endpointToBeDeleted['Id'],
                                EndpointRequest: {
                                    User: {
                                        UserId: ''
                                    }
                                }
                            };
                            _this.pinpointClient.updateEndpoint(update_params, function (err, data) {
                                if (err) {
                                    logger.debug('Failed to update the endpoint', err);
                                    return rej(err);
                                }
                                logger.debug('The old endpoint is updated with an empty string for user id');
                                return res(data);
                            });
                        });
                    })];
            });
        });
    };
    /**
     * @private
     * @param config
     * Init the clients
     */
    AWSPinpointProvider.prototype._initClients = function (config, credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var region;
            return __generator(this, function (_a) {
                logger.debug('init clients');
                if (this.mobileAnalytics
                    && this.pinpointClient
                    && this._config.credentials
                    && this._config.credentials.sessionToken === credentials.sessionToken
                    && this._config.credentials.identityId === credentials.identityId) {
                    logger.debug('no change for aws credentials, directly return from init');
                    return [2 /*return*/];
                }
                this._config.credentials = credentials;
                region = config.region;
                logger.debug('init clients with credentials', credentials);
                this.mobileAnalytics = new MobileAnalytics({ credentials: credentials, region: region });
                this.pinpointClient = new Pinpoint({ region: region, credentials: credentials });
                if (core_1.Platform.isReactNative) {
                    this.pinpointClient.customizeRequests(function (request) {
                        request.on('build', function (req) {
                            req.httpRequest.headers['user-agent'] = core_1.Platform.userAgent;
                        });
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    AWSPinpointProvider.prototype._getEndpointId = function (cacheKey) {
        return __awaiter(this, void 0, void 0, function () {
            var endpointId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cache_1.default.getItem(cacheKey)];
                    case 1:
                        endpointId = _a.sent();
                        logger.debug('endpointId from cache', endpointId, 'type', typeof endpointId);
                        if (!endpointId) {
                            endpointId = uuid_1.v1();
                            cache_1.default.setItem(cacheKey, endpointId);
                        }
                        return [2 /*return*/, endpointId];
                }
            });
        });
    };
    /**
     * EndPoint request
     * @return {Object} - The request of updating endpoint
     */
    AWSPinpointProvider.prototype._endpointRequest = function (config, event) {
        var credentials = config.credentials;
        var clientInfo = this._clientInfo || {};
        var clientContext = config.clientContext || {};
        // for now we have three different ways for default endpoint configurations
        // clientInfo
        // clientContext (deprecated)
        // config.endpoint
        var defaultEndpointConfig = config.endpoint || {};
        var demographicByClientInfo = {
            appVersion: clientInfo.appVersion,
            make: clientInfo.make,
            model: clientInfo.model,
            modelVersion: clientInfo.version,
            platform: clientInfo.platform
        };
        // for backward compatibility
        var clientId = clientContext.clientId, appTitle = clientContext.appTitle, appVersionName = clientContext.appVersionName, appVersionCode = clientContext.appVersionCode, appPackageName = clientContext.appPackageName, demographicByClientContext = __rest(clientContext, ["clientId", "appTitle", "appVersionName", "appVersionCode", "appPackageName"]);
        var channelType = event.address ? ((clientInfo.platform === 'android') ? 'GCM' : 'APNS') : undefined;
        var tmp = __assign({ channelType: channelType, requestId: uuid_1.v1(), effectiveDate: new Date().toISOString() }, defaultEndpointConfig, event, { attributes: __assign({}, defaultEndpointConfig.attributes, event.attributes), demographic: __assign({}, demographicByClientInfo, demographicByClientContext, defaultEndpointConfig.demographic, event.demographic), location: __assign({}, defaultEndpointConfig.location, event.location), metrics: __assign({}, defaultEndpointConfig.metrics, event.metrics), user: {
                userId: event.userId || defaultEndpointConfig.userId || credentials.identityId,
                userAttributes: __assign({}, defaultEndpointConfig.userAttributes, event.userAttributes)
            } });
        // eliminate unnecessary params
        var userId = tmp.userId, userAttributes = tmp.userAttributes, name = tmp.name, session = tmp.session, eventId = tmp.eventId, immediate = tmp.immediate, ret = __rest(tmp, ["userId", "userAttributes", "name", "session", "eventId", "immediate"]);
        return core_1.JS.transferKeyToUpperCase(ret, [], ['metrics', 'userAttributes', 'attributes']);
    };
    /**
     * @private
     * check if current credentials exists
     */
    AWSPinpointProvider.prototype._getCredentials = function () {
        var that = this;
        return core_1.Credentials.get()
            .then(function (credentials) {
            if (!credentials)
                return null;
            logger.debug('set credentials for analytics', credentials);
            return core_1.Credentials.shear(credentials);
        })
            .catch(function (err) {
            logger.debug('ensure credentials error', err);
            return null;
        });
    };
    AWSPinpointProvider.category = 'Analytics';
    AWSPinpointProvider.providerName = 'AWSPinpoint';
    return AWSPinpointProvider;
}());
exports.default = AWSPinpointProvider;
//# sourceMappingURL=AWSPinpointProvider.js.map