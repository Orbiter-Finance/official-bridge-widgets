import { ActivityStep } from '../../hooks/rows/common';
import { Transaction } from '../../service/models/transaction.model';
import { useTimer } from './WaitLineItem';
export { useTimer };
export declare const LineItem: import('react').MemoExoticComponent<(props: {
    step: ActivityStep;
    tx?: Transaction;
}) => import("react/jsx-runtime").JSX.Element>;
