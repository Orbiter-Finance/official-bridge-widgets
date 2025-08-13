import { Token } from '../../service/models/token.model';
export declare const useGetFormattedAmount: (token?: Token) => (raw: string) => {
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
