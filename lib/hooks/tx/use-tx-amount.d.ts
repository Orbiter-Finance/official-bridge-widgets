import { Token } from '../../service/models/token.model';
import { Transaction } from '../../service/models/transaction.model';
export declare function useTxAmount(tx: Transaction | null | undefined, token: Token | null | undefined): {
    formatted: string;
    raw: string;
    text: string;
} | null;
