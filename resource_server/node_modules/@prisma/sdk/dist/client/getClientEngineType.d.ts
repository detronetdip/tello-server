import type { GeneratorConfig } from '@prisma/generator-helper';
export declare enum ClientEngineType {
    Library = "library",
    Binary = "binary",
    DataProxy = "dataproxy"
}
export declare const DEFAULT_CLIENT_ENGINE_TYPE = ClientEngineType.Library;
export declare function getClientEngineType(generatorConfig?: GeneratorConfig): ClientEngineType;
