/// <reference lib="webworker" />
import type { EngineConfig, EngineEventType, GetConfigResult } from '../common/Engine';
import { Engine } from '../common/Engine';
export declare class DataProxyEngine extends Engine {
    private pushPromise;
    private inlineSchema;
    private inlineSchemaHash;
    private inlineDatasources;
    private config;
    private logEmitter;
    private env;
    private clientVersion;
    private remoteClientVersion;
    private headers;
    private host;
    constructor(config: EngineConfig);
    private pushSchema;
    version(): string;
    start(): Promise<void>;
    stop(): Promise<void>;
    on(event: EngineEventType, listener: (args?: any) => any): void;
    private url;
    getConfig(): Promise<GetConfigResult>;
    private uploadSchema;
    request<T>(query: string, headers: Record<string, string>, attempt?: number): any;
    requestBatch<T>(queries: string[], headers: Record<string, string>, isTransaction?: boolean, attempt?: number): Promise<any>;
    private requestInternal;
    transaction(): Promise<any>;
    private extractHostAndApiKey;
}
