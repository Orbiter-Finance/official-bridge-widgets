import { Token } from '../models/token.model';
export declare const selectedTokenAtom: import('jotai').PrimitiveAtom<Token | undefined> & {
    init: Token | undefined;
};
export declare const useSelectedToken: () => Token | undefined;
export declare const useSetSelectedToken: () => (args_0: Token | ((prev: Token | undefined) => Token | undefined) | undefined) => void;
export declare const destinationTokenAtom: import('jotai').PrimitiveAtom<Token | undefined> & {
    init: Token | undefined;
};
export declare const useDestinationToken: () => Token | undefined;
export declare const useSetDestinationToken: () => (args_0: Token | ((prev: Token | undefined) => Token | undefined) | undefined) => void;
