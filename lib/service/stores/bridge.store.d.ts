import { Confirmation } from '../models/transaction.model';
/**
 * App state
 */
export declare const fromChainIdAtom: import('jotai').PrimitiveAtom<number | undefined> & {
    init: number | undefined;
};
export declare const useFromChainId: () => number | undefined;
export declare const useSetFromChainId: () => (args_0: number | ((prev: number | undefined) => number | undefined) | undefined) => void;
export declare const toChainIdAtom: import('jotai').PrimitiveAtom<number | undefined> & {
    init: number | undefined;
};
export declare const useToChainId: () => number | undefined;
export declare const useSetToChainId: () => (args_0: number | ((prev: number | undefined) => number | undefined) | undefined) => void;
export declare const rawAmountAtom: import('jotai').PrimitiveAtom<string> & {
    init: string;
};
export declare const useRawAmount: () => string;
export declare const useSetRawAmount: () => (args_0: string | ((prev: string) => string)) => void;
export declare const isWrapAtom: import('jotai').PrimitiveAtom<boolean> & {
    init: boolean;
};
export declare const useIsWrap: () => boolean;
export declare const useSetIsWrap: () => (args_0: boolean | ((prev: boolean) => boolean)) => void;
export declare const displayTransactionsAtom: import('jotai').PrimitiveAtom<boolean> & {
    init: boolean;
};
export declare const useDisplayTransactions: () => boolean;
export declare const useSetDisplayTransactions: () => (args_0: boolean | ((prev: boolean) => boolean)) => void;
/**
 * Bridge state
 */
export declare const approveConfirmationAtom: import('jotai').PrimitiveAtom<Confirmation | null> & {
    init: Confirmation | null;
};
export declare const useApproveConfirmation: () => Confirmation | null;
export declare const useSetApproveConfirmation: () => (args_0: Confirmation | ((prev: Confirmation | null) => Confirmation | null) | null) => void;
export declare const waitingForApproveSignatureAtom: import('jotai').PrimitiveAtom<boolean> & {
    init: boolean;
};
export declare const useWaitingForApproveSignature: () => boolean;
export declare const useSetWaitingForApproveSignature: () => (args_0: boolean | ((prev: boolean) => boolean)) => void;
export declare const bridgeSubmittedAtom: import('jotai').PrimitiveAtom<boolean> & {
    init: boolean;
};
export declare const useBridgeSubmitted: () => boolean;
export declare const useSetBridgeSubmitted: () => (args_0: boolean | ((prev: boolean) => boolean)) => void;
export declare const waitingForBridgeSignatureAtom: import('jotai').PrimitiveAtom<boolean> & {
    init: boolean;
};
export declare const useWaitingForBridgeSignature: () => boolean;
export declare const useSetWaitingForBridgeSignature: () => (args_0: boolean | ((prev: boolean) => boolean)) => void;
