import { JSX } from 'react';
import { ChainDto } from '../../service/models/chain.model';
import { RouteStepWrapDto } from '../../service/models/route.model';
import { Confirmation } from '../../service/models/transaction.model';
export declare const ProgressRowStatus: {
    readonly NotStarted: "not-started";
    readonly InProgress: "in-progress";
    readonly Done: "done";
};
export type ProgressRowStatus = (typeof ProgressRowStatus)[keyof typeof ProgressRowStatus];
export type TransactionStep = {
    label: string;
    gasLimit?: number | bigint;
    chain: ChainDto;
    ButtonComponent?: () => JSX.Element;
    confirmation?: Confirmation;
    isExpiredAndReturned?: boolean;
    isFailed?: boolean;
};
export type WaitStepInProgress = {
    startedAt: number;
    duration: number;
    label: string;
};
export type WaitStepDone = {
    duration: number;
    done: true;
    label: string;
};
export type WaitStepNotStarted = {
    duration: number;
    label: string;
};
export type WaitStep = WaitStepInProgress | WaitStepNotStarted | WaitStepDone;
export type ActivityStep = WaitStep | TransactionStep | WrapStep;
export declare const isWaitStep: (x: ActivityStep) => x is WaitStep;
export declare const isWaitStepInProgress: (x: WaitStep) => x is WaitStepInProgress;
export declare const isWaitStepDone: (x: WaitStep) => x is WaitStepDone;
export declare const isTransactionStep: (x: ActivityStep) => x is TransactionStep;
export type WrapStep = {
    label: string;
    chain: ChainDto;
    data: RouteStepWrapDto;
};
export declare const isWrapStep: (x: ActivityStep) => x is WrapStep;
/**
 * Buttons are always dependent on some wait period elapsing.
 */
export declare const isButtonEnabled: (timestamp: number | undefined, duration: number) => boolean;
export declare const buildWaitStep: (label: string, start: Confirmation | undefined, end: Confirmation | undefined, duration: number, done: boolean | undefined, showActualDuration?: boolean) => WaitStep;
