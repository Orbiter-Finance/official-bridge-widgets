import { ReactNode } from 'react';
import { AxiosResponse } from 'axios';
import { BridgeConfig } from '../../types';
export interface ApiResponseData<T = any> {
    code: number;
    message?: string;
    data?: T;
}
export declare const api: import('axios').AxiosInstance;
export type ApiResponse<T> = Promise<AxiosResponse<T>>;
export declare function QueryProvider({ children, projectId, network }: {
    children: ReactNode;
    projectId: BridgeConfig['projectId'];
    network?: BridgeConfig['network'];
}): import("react/jsx-runtime").JSX.Element;
