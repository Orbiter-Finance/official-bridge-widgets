export declare const useEvmGasBalance: (chainId: number | undefined, address: string | undefined | null) => {
    isLoading: boolean;
    data: bigint | undefined;
    refetch: (options?: import('@tanstack/react-query').RefetchOptions) => Promise<import('@tanstack/react-query').QueryObserverResult<{
        decimals: number;
        formatted: string;
        symbol: string;
        value: bigint;
    }, import('viem').GetBalanceErrorType>>;
};
export declare const useGasBalance: (chainId: number | undefined) => {
    isLoading: boolean;
    data: bigint | undefined;
    refetch: (options?: import('@tanstack/react-query').RefetchOptions) => Promise<import('@tanstack/react-query').QueryObserverResult<{
        decimals: number;
        formatted: string;
        symbol: string;
        value: bigint;
    }, import('viem').GetBalanceErrorType>>;
};
export declare const useGasBalanceWithAddress: (chainId: number | undefined, address: string | undefined | null) => {
    isLoading: boolean;
    data: bigint | undefined;
    refetch: (options?: import('@tanstack/react-query').RefetchOptions) => Promise<import('@tanstack/react-query').QueryObserverResult<{
        decimals: number;
        formatted: string;
        symbol: string;
        value: bigint;
    }, import('viem').GetBalanceErrorType>>;
};
