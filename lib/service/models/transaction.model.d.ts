import { RouteProvider } from '../../common/consts/route-provider';
import { RouteStepWrapDto } from './route.model';
export interface BridgeActivity {
    transactions: Transaction[];
    total: number;
    inProgressCount: number;
}
export declare enum MessageStatus {
    Initiated = "INITIATED",
    Processing = "PROCESSING",
    Claimable = "CLAIMABLE",
    Claimed = "CLAIMED",
    Completed = "COMPLETED",
    Failed = "FAILED",
    Provable = "PROVABLE",
    Proven = "PROVEN"
}
export declare enum TransactionStatus {
    Confirmed = "confirmed",
    Pending = "pending",
    Reverted = "reverted",
    Dropped = "dropped"
}
export declare enum TransactionType {
    Deposit = "deposit",
    Withdrawal = "withdrawal",
    ForcedWithdrawal = "forced-withdrawal",
    Interop = "interop",
    Orbiter = "orbiter-bridge"
}
export interface Transaction {
    id: string;
    status: MessageStatus;
    from: string;
    to: string;
    send: Confirmation;
    receive?: Confirmation;
    wrap?: RouteStepWrapDto;
    fromChainId: number;
    toChainId: number;
    duration: number;
    token: string;
    receiveToken: string;
    amount: string;
    receiveAmount?: string;
    type: TransactionType;
    provider: RouteProvider;
    createdAt?: string;
    updatedAt?: string;
    prove?: Confirmation;
    withdrawal?: Confirmation;
}
export interface TransactionDto {
    chainId: string;
    data: string;
    to: string;
    value: string;
}
export interface GasEstimateRpcParams {
    data: string;
    to: string;
    from: string;
    value: string;
}
export interface TransactionForGasEstimate extends GasEstimateRpcParams {
    chainId: string;
    gasPrice?: string;
}
export interface NotSubmittedSafeTx {
    type: 'not-submitted-safe-tx';
    safeTransactionHash: string;
    timestamp: number;
}
export declare const newNotSubmittedSafeTx: (tx: Omit<NotSubmittedSafeTx, "type" | "timestamp">) => NotSubmittedSafeTx;
export interface NotSubmittedCall {
    type: 'not-submitted-call';
    id: string;
    timestamp: number;
}
export declare const newNotSubmittedCall: (tx: Omit<NotSubmittedCall, "type" | "timestamp">) => NotSubmittedCall;
export interface SubmittedTx {
    type: 'submitted-tx';
    transactionHash: string;
    timestamp: number;
}
export declare const newSubmittedTx: (tx: Omit<SubmittedTx, "type" | "timestamp">) => SubmittedTx;
export interface ConfirmedTx {
    status: TransactionStatus;
    timestamp: number;
    transactionHash: string;
    blockNumber?: number;
}
export interface FailedCall {
    type: 'failed-call';
    id: string;
    failed: true;
    timestamp: number;
}
export declare const newFailedCall: (tx: Omit<FailedCall, "type" | "timestamp">) => FailedCall;
export type NotSubmittedTx = NotSubmittedSafeTx | NotSubmittedCall;
export type Confirmation = NotSubmittedTx | SubmittedTx | ConfirmedTx | FailedCall;
export declare const newMockConfirmedTx: () => ConfirmedTx;
