import { Transaction } from '../../../service/models/transaction.model';
type ActionStatus = {
    description: string;
    button: string;
};
type WaitStatus = {
    description: string;
    timestamp: number;
};
type GeneralStatus = {
    description: string;
};
type NoStatus = null;
type Status = ActionStatus | WaitStatus | NoStatus | GeneralStatus;
export declare const isActionStatus: (x: Status) => x is ActionStatus;
export declare const isWaitStatus: (x: Status) => x is WaitStatus;
export declare const isGeneralStatus: (x: Status) => x is GeneralStatus;
export declare const useAction: (tx: Transaction) => "prove" | "finalize" | null;
export declare const useStatus: (tx: Transaction) => Status;
export {};
