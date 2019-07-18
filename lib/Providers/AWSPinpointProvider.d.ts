import { AnalyticsProvider, PromiseHandlers } from '../types';
export default class AWSPinpointProvider implements AnalyticsProvider {
    static category: string;
    static providerName: string;
    private _config;
    private mobileAnalytics;
    private pinpointClient;
    private _sessionId;
    private _sessionStartTimestamp;
    private _buffer;
    private _clientInfo;
    private _timer;
    private _endpointGenerating;
    constructor(config?: any);
    private _setupTimer;
    /**
     * @private
     * @param params - params for the event recording
     * Put events into buffer
     */
    private _putToBuffer;
    /**
     * get the category of the plugin
     */
    getCategory(): string;
    /**
     * get provider name of the plugin
     */
    getProviderName(): string;
    /**
     * configure the plugin
     * @param {Object} config - configuration
     */
    configure(config: any): object;
    /**
     * record an event
     * @param {Object} params - the params of an event
     */
    record(params: any, handlers: PromiseHandlers): Promise<any>;
    private _generateSession;
    private _send;
    private _generateBatchItemContext;
    private _pinpointPutEvents;
    private _retry;
    private _record;
    private _updateEndpoint;
    private _removeUnusedEndpoints;
    /**
     * @private
     * @param config
     * Init the clients
     */
    private _initClients;
    private _getEndpointId;
    /**
     * EndPoint request
     * @return {Object} - The request of updating endpoint
     */
    private _endpointRequest;
    /**
     * @private
     * check if current credentials exists
     */
    private _getCredentials;
}
