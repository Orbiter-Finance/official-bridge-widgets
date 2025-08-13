export declare const modalNames: readonly ["Confirmation", "RouteSelector", "TokenSelector", "Activity", "TransactionDetails", "TokenSelect", "ChainSelect"];
export type ModalName = (typeof modalNames)[number];
export declare const modalsAtom: import('jotai').PrimitiveAtom<{
    Activity?: boolean | undefined;
    Confirmation?: boolean | undefined;
    RouteSelector?: boolean | undefined;
    TokenSelector?: boolean | undefined;
    TransactionDetails?: boolean | undefined;
    TokenSelect?: boolean | undefined;
    ChainSelect?: boolean | undefined;
}> & {
    init: {
        Activity?: boolean | undefined;
        Confirmation?: boolean | undefined;
        RouteSelector?: boolean | undefined;
        TokenSelector?: boolean | undefined;
        TransactionDetails?: boolean | undefined;
        TokenSelect?: boolean | undefined;
        ChainSelect?: boolean | undefined;
    };
};
export declare const activeIdsAtom: import('jotai').PrimitiveAtom<{
    Activity?: string | undefined;
    Confirmation?: string | undefined;
    RouteSelector?: string | undefined;
    TokenSelector?: string | undefined;
    TransactionDetails?: string | undefined;
    TokenSelect?: string | undefined;
    ChainSelect?: string | undefined;
}> & {
    init: {
        Activity?: string | undefined;
        Confirmation?: string | undefined;
        RouteSelector?: string | undefined;
        TokenSelector?: string | undefined;
        TransactionDetails?: string | undefined;
        TokenSelect?: string | undefined;
        ChainSelect?: string | undefined;
    };
};
export declare const addModalAtom: import('jotai').WritableAtom<null, [name: "Activity" | "Confirmation" | "RouteSelector" | "TokenSelector" | "TransactionDetails" | "TokenSelect" | "ChainSelect"], void> & {
    init: null;
};
export declare const removeModalAtom: import('jotai').WritableAtom<null, [name: "Activity" | "Confirmation" | "RouteSelector" | "TokenSelector" | "TransactionDetails" | "TokenSelect" | "ChainSelect"], void> & {
    init: null;
};
export declare const setActiveIdAtom: import('jotai').WritableAtom<null, [name: "Activity" | "Confirmation" | "RouteSelector" | "TokenSelector" | "TransactionDetails" | "TokenSelect" | "ChainSelect", activeId: string], void> & {
    init: null;
};
export declare const useModals: () => {
    Activity?: boolean | undefined;
    Confirmation?: boolean | undefined;
    RouteSelector?: boolean | undefined;
    TokenSelector?: boolean | undefined;
    TransactionDetails?: boolean | undefined;
    TokenSelect?: boolean | undefined;
    ChainSelect?: boolean | undefined;
};
export declare const useActiveIds: () => {
    Activity?: string | undefined;
    Confirmation?: string | undefined;
    RouteSelector?: string | undefined;
    TokenSelector?: string | undefined;
    TransactionDetails?: string | undefined;
    TokenSelect?: string | undefined;
    ChainSelect?: string | undefined;
};
export declare const useAddModal: () => (name: "Activity" | "Confirmation" | "RouteSelector" | "TokenSelector" | "TransactionDetails" | "TokenSelect" | "ChainSelect") => void;
export declare const useRemoveModal: () => (name: "Activity" | "Confirmation" | "RouteSelector" | "TokenSelector" | "TransactionDetails" | "TokenSelect" | "ChainSelect") => void;
export declare const useSetActiveId: () => (name: "Activity" | "Confirmation" | "RouteSelector" | "TokenSelector" | "TransactionDetails" | "TokenSelect" | "ChainSelect", activeId: string) => void;
