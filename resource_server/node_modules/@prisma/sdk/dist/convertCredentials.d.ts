import type { ConnectorType } from '@prisma/generator-helper';
import type { DatabaseCredentials } from './types';
export declare function credentialsToUri(credentials: DatabaseCredentials): string;
export declare function uriToCredentials(connectionString: string): DatabaseCredentials;
export declare function protocolToConnectorType(protocol: string): ConnectorType;
