import { Address } from 'viem';
export declare const useRejectedCallsUpdate: () => `0x${string}`[];
export declare const useSetRejectedCallsUpdate: () => (args_0: `0x${string}`[] | typeof import('jotai/utils').RESET | ((prev: `0x${string}`[]) => `0x${string}`[] | typeof import('jotai/utils').RESET)) => void;
export declare const useSlippage: () => number;
export declare const useSetSlippage: () => (args_0: number | typeof import('jotai/utils').RESET | ((prev: number) => number | typeof import('jotai/utils').RESET)) => void;
export declare const useAddRejectedCallsUpdate: () => (address: Address) => void;
