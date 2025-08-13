import { RouteProvider } from '../../common/consts/route-provider';
import { TransactionType } from '../../service/models/transaction.model';
export declare const routeProviderToTransactionType: {
    EniDeposit: TransactionType;
    EniWithdrawal: TransactionType;
    EniForcedWithdrawal: TransactionType;
    EniInterop: TransactionType;
    NERODeposit: TransactionType;
    NEROWithdrawal: TransactionType;
    NEROForcedWithdrawal: TransactionType;
    NEROInterop: TransactionType;
    Orbiter: TransactionType;
};
export declare const RouteProviderName: ({ provider, className }: {
    provider?: RouteProvider;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const RouteProviderIcon: ({ provider, className }: {
    provider?: RouteProvider;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element | null;
