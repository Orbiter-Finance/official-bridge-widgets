export declare const useReceiveAmount: () => {
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
    isLoading: boolean;
};
