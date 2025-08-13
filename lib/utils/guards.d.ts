import { RouteQuoteDto, RouteStepDto, RouteStepTransactionDto, RouteStepWaitDto, RouteStepWrapDto } from '../service/models/route.model';
import { Confirmation, ConfirmedTx, FailedCall, NotSubmittedCall, NotSubmittedSafeTx, SubmittedTx, Transaction } from '../service/models/transaction.model';
export declare const RouteErrorType: {
    readonly GenericError: "GenericError";
    readonly AmountTooSmall: "AmountTooSmall";
    readonly AmountTooLarge: "AmountTooLarge";
    readonly Paused: "Paused";
    readonly Disabled: "Disabled";
};
export type RouteErrorType = (typeof RouteErrorType)[keyof typeof RouteErrorType];
export interface GenericRouteErrorDto {
    error: string;
    type: RouteErrorType;
}
export interface AmountTooLargeRouteErrorDto {
    maximum: string;
    type: RouteErrorType;
}
export interface AmountTooSmallRouteErrorDto {
    minimum: string;
    type: RouteErrorType;
}
export interface PausedRouteErrorDto {
    type: RouteErrorType;
}
export interface DisabledRouteErrorDto {
    type: RouteErrorType;
}
type RouteQuote = RouteQuoteDto | GenericRouteErrorDto | AmountTooLargeRouteErrorDto | AmountTooSmallRouteErrorDto | PausedRouteErrorDto | DisabledRouteErrorDto;
type RouteQuoteError = GenericRouteErrorDto | AmountTooLargeRouteErrorDto | AmountTooSmallRouteErrorDto | PausedRouteErrorDto | DisabledRouteErrorDto;
export declare const isRouteQuoteError: (a: RouteQuote) => a is RouteQuoteError;
export declare const isRouteQuote: (a: RouteQuote | undefined) => a is RouteQuoteDto;
export declare const isRouteWaitStep: (a: RouteStepDto) => a is RouteStepWaitDto;
export declare const isRouteWrapStep: (a: RouteStepDto) => a is RouteStepWrapDto;
export declare const isConfirmedTx: (x: Confirmation) => x is ConfirmedTx;
export declare const isSubmittedTx: (x: Confirmation) => x is SubmittedTx;
export declare const isNotSubmittedSafeTx: (x: Confirmation) => x is NotSubmittedSafeTx;
export declare const isNotSubmittedCall: (x: Confirmation) => x is NotSubmittedCall;
export declare const isConfirmedSuccessTx: (x: Confirmation) => x is ConfirmedTx;
export declare const isConfirmedFailedTx: (x: Confirmation) => x is ConfirmedTx;
export declare const isFailedCall: (x: Confirmation) => x is FailedCall;
export declare const isFailedTx: (x: Transaction | undefined | null) => boolean;
export declare const isRouteTransactionStep: (a: RouteStepDto) => a is RouteStepTransactionDto;
export declare const isWithdrawal: (tx: Pick<Transaction, "provider">) => tx is Transaction;
export declare const isForcedWithdrawal: (tx: Pick<Transaction, "provider">) => tx is Transaction;
export declare const isOrbiter: (tx: Pick<Transaction, "provider">) => tx is Transaction;
export {};
