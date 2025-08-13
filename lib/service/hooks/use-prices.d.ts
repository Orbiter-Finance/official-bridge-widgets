import { Token } from '../models/token.model';
export declare const useGetTokenPrice: () => (token: Token | null) => number | null;
export declare const useGetTokenPriceByKey: (coinKey: string) => {
    data: Record<string, number> | undefined;
    isLoading: boolean;
};
export declare const useTokenPrice: (t?: Token) => number | null;
