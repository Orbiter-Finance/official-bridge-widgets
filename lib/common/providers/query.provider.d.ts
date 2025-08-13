import { ReactNode } from 'react';
import { AxiosResponse } from 'axios';
export declare const api: import('axios').AxiosInstance;
export type ApiResponse<T> = Promise<AxiosResponse<T>>;
export declare function QueryProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
