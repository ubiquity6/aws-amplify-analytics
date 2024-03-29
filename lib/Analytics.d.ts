import { AnalyticsProvider, EventMetrics } from './types';
/**
* Provide mobile analytics client functions
*/
export default class AnalyticsClass {
    private _config;
    private _provider;
    private _pluggables;
    private _disabled;
    private _autoSessionRecord;
    private _trackers;
    /**
     * Initialize Analtyics
     * @param config - Configuration of the Analytics
     */
    constructor();
    getModuleName(): string;
    /**
     * configure Analytics
     * @param {Object} config - Configuration of the Analytics
     */
    configure(config?: any): any;
    /**
     * add plugin into Analytics category
     * @param {Object} pluggable - an instance of the plugin
     */
    addPluggable(pluggable: AnalyticsProvider): any;
    /**
     * Get the plugin object
     * @param providerName - the name of the plugin
     */
    getPluggable(providerName: any): AnalyticsProvider;
    /**
     * Remove the plugin object
     * @param providerName - the name of the plugin
     */
    removePluggable(providerName: any): void;
    /**
     * stop sending events
     */
    disable(): void;
    /**
     * start sending events
     */
    enable(): void;
    /**
     * Record Session start
     * @return - A promise which resolves if buffer doesn't overflow
     */
    startSession(provider?: string): Promise<void>;
    /**
     * Record Session stop
     * @return - A promise which resolves if buffer doesn't overflow
     */
    stopSession(provider?: string): Promise<void>;
    /**
     * Record one analytic event and send it to Pinpoint
     * @param {String} name - The name of the event
     * @param {Object} [attributs] - Attributes of the event
     * @param {Object} [metrics] - Event metrics
     * @return - A promise which resolves if buffer doesn't overflow
     */
    record(event: string | object, provider?: any, metrics?: EventMetrics): Promise<void>;
    updateEndpoint(attrs: any, provider?: any): Promise<void>;
    private _sendEvent;
    autoTrack(trackerType: any, opts: any): void;
    private isAnalyticsConfigured;
}
