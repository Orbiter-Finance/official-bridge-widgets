import { Token } from '../../service/models/token.model';
export declare function useTokenBalance(token: Token | null | undefined): {
    isLoading: boolean;
    data: bigint;
};
