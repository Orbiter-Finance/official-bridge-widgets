export declare const useNetworkFee: () => {
    isLoading: boolean;
    data: null;
} | {
    isLoading: boolean;
    data: {
        fiat: null;
        token: {
            formatted: string;
            amount: string;
            raw: string;
        };
    } | {
        fiat: {
            formatted: string | null;
            amount: number;
        } | null;
        token: {
            formatted: string;
            amount: number;
            raw: string;
        };
    };
};
export declare const useNetworkFeeForGasLimit: (chainId: string | undefined, gasLimit: number | bigint | undefined | null) => {
    isLoading: boolean;
    data: null;
} | {
    isLoading: boolean;
    data: {
        fiat: null;
        token: {
            formatted: string;
            amount: string;
            raw: string;
        };
    } | {
        fiat: {
            formatted: string | null;
            amount: number;
        } | null;
        token: {
            formatted: string;
            amount: number;
            raw: string;
        };
    };
};
