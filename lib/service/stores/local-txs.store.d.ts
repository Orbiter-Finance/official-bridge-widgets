import { Confirmation, Transaction } from '../models/transaction.model';
interface PendingTx {
    id: string;
    chainId: number;
    confirmation: Confirmation;
}
export declare const transactionsAtom: import('jotai').WritableAtom<Transaction[], [Transaction[] | typeof import('jotai/utils').RESET | ((prev: Transaction[]) => Transaction[] | typeof import('jotai/utils').RESET)], void>;
export declare const pendingProvesAtom: import('jotai').WritableAtom<PendingTx[], [typeof import('jotai/utils').RESET | PendingTx[] | ((prev: PendingTx[]) => typeof import('jotai/utils').RESET | PendingTx[])], void>;
export declare const pendingFinalisesAtom: import('jotai').WritableAtom<PendingTx[], [typeof import('jotai/utils').RESET | PendingTx[] | ((prev: PendingTx[]) => typeof import('jotai/utils').RESET | PendingTx[])], void>;
export declare const usePendingTransactions: () => Transaction[];
export declare const usePendingProves: () => PendingTx[];
export declare const usePendingFinalises: () => PendingTx[];
export declare const addTransactionAtom: import('jotai').WritableAtom<null, [tx: Transaction], void> & {
    init: null;
};
export declare const removeTransactionByIdAtom: import('jotai').WritableAtom<null, [id: string], void> & {
    init: null;
};
export declare const removeTransactionByHashAtom: import('jotai').WritableAtom<null, [{
    hash: string;
    newId: string;
}], void> & {
    init: null;
};
export declare const updateTransactionAtom: import('jotai').WritableAtom<null, [{
    oldConfirmation: Confirmation;
    newConfirmation: Confirmation;
}], void> & {
    init: null;
};
export declare const addProvingAtom: import('jotai').WritableAtom<null, [tx: PendingTx], void> & {
    init: null;
};
export declare const updateProvingAtom: import('jotai').WritableAtom<null, [{
    id: string;
    confirmation: Confirmation;
}], void> & {
    init: null;
};
export declare const removeProvingAtom: import('jotai').WritableAtom<null, [id: string], void> & {
    init: null;
};
export declare const addFinalisingAtom: import('jotai').WritableAtom<null, [tx: PendingTx], void> & {
    init: null;
};
export declare const updateFinalisingAtom: import('jotai').WritableAtom<null, [{
    id: string;
    confirmation: Confirmation;
}], void> & {
    init: null;
};
export declare const removeFinalisingAtom: import('jotai').WritableAtom<null, [id: string], void> & {
    init: null;
};
export declare const useAddFinalising: () => (tx: PendingTx) => void;
export declare const useUpdateFinalising: () => (args_0: {
    id: string;
    confirmation: Confirmation;
}) => void;
export declare const useRemoveFinalising: () => (id: string) => void;
export declare const useLogout: () => () => void;
export {};
