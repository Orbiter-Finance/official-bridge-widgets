import { RouteProvider } from '../../common/consts/route-provider';
import { ChainDto } from '../../service/models/chain.model';
import { Token } from '../../service/models/token.model';
export declare const useAddressMeta: (chain: ChainDto | null, address: string | null | undefined) => {
    formatted: string;
    link: string;
} | null;
export interface BridgeInfoProps {
    from: ChainDto | null;
    to: ChainDto | null;
    sender?: string;
    recipient?: string;
    token?: Token;
    sentAmount?: string;
    receivedAmount?: string;
    provider?: RouteProvider;
    transferTime?: string;
}
export declare const BridgeInfo: import('react').MemoExoticComponent<({ from, to, sender, recipient, token, sentAmount, receivedAmount, provider, transferTime }: BridgeInfoProps) => import("react/jsx-runtime").JSX.Element | null>;
