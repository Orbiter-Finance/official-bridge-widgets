import { Token } from '../../service/models/token.model';
import { Transaction } from '../../service/models/transaction.model';
export declare function useTxAmountOutput(tx?: Transaction, token?: Token): {
    formatted: string;
    raw: string;
    text: string;
} | null | undefined;
