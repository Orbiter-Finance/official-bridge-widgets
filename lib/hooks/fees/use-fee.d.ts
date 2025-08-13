import { ChainDto } from '../../service/models/chain.model';
import { RouteResultDto } from '../../service/models/route.model';
import { PartialToken } from '../../service/models/token.model';
type Fee = {
    name: string;
    token: {
        token: PartialToken;
        formatted: string;
        amount: number;
    };
    fiat: {
        formatted: string;
        amount: number;
    } | null;
};
export declare const useTotalFiatValue: (fees: Fee[]) => {
    total: number;
    formatted: string;
    tokens: {
        token: PartialToken;
        formatted: string;
        amount: number;
    }[];
} | null;
export declare const useTotalTokenValue: (fees: Fee[], chain: ChainDto | undefined | null) => {
    total: number;
    formatted: string;
    tokens: {
        token: PartialToken;
        formatted: string;
        amount: number;
    }[];
} | null;
export declare const useDeduplicatedFeeTokens: (fees: Fee[]) => {
    token: PartialToken;
    tokenTotal: {
        amount: number;
        formatted: string;
    };
    fiatTotal: {
        amount: number;
        formatted: string;
    } | null;
}[];
export declare const useFeesForRoute: (route: {
    isLoading: boolean;
    data: RouteResultDto | null;
}) => {
    isLoading: boolean;
    data: Fee[];
};
export {};
