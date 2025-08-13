export declare function useTokenBalances(type?: 'from' | 'to'): {
    isLoading: boolean;
    isError: boolean;
    data: {
        token: import('../../service/models/token.model').Token;
        balance: bigint;
        usdValue: number;
    }[];
    refetch: () => void;
};
