import { default as React } from 'react';
import { WaitStep } from '../../hooks/rows/common';
import { Transaction } from '../../service/models/transaction.model';
export declare const useTimer: (duration: number | undefined, startedAt: number | undefined) => string | null;
export declare const WaitLineItem: React.MemoExoticComponent<({ step, tx }: {
    step: WaitStep;
    tx?: Transaction;
}) => import("react/jsx-runtime").JSX.Element>;
