import { useNetworkFeeForGasLimit } from '../../hooks/fees/use-network-fee';
import { ChainDto } from '../../service/models/chain.model';
export declare const Pill: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const SmallPill: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const GasFeePill: ({ networkFee, chain, showChainIcon, txStepCount }: {
    chain: ChainDto | undefined;
    networkFee: ReturnType<typeof useNetworkFeeForGasLimit>;
    showChainIcon?: boolean;
    txStepCount?: number;
}) => import("react/jsx-runtime").JSX.Element;
