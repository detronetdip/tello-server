import type { O } from 'ts-toolbelt';
export declare type RequestOptions = O.Patch<{
    headers?: {
        [k: string]: string;
    };
    body?: string;
}, RequestInit>;
export declare type RequestResponse = O.Required<O.Optional<Response>, 'json' | 'url' | 'ok' | 'status'>;
/**
 * Isomorphic `fetch` that imitates `fetch` via `http` when on Node.js.
 * @param url
 * @param options
 * @returns
 */
export declare function request(url: string, options?: RequestOptions): Promise<RequestResponse>;
