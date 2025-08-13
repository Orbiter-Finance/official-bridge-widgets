import { RouteProvider } from '../common/consts/route-provider';
type FromChainSelect = {
    event: 'from-chain-select';
    name: string;
    id: string;
};
type ToChainSelect = {
    event: 'to-chain-select';
    name: string;
    id: string;
};
type TokenSelect = {
    event: 'token-select';
    symbol: string;
    network: string;
};
type HighlightedTokenSelect = {
    event: 'highlighted-token-select';
    symbol: string;
    network: string;
};
type TokenBannerClick = {
    event: 'token-banner-click';
    symbol: string;
};
type Bridge = {
    event: 'bridge';
    from: string;
    to: string;
    amount: number;
    token: string;
    type: string;
    transactionHash: string;
};
type OpenActivity = {
    event: 'open-activity';
};
type CloseActivity = {
    event: 'close-activity';
};
type ClickDeposit = {
    event: 'click-deposit';
    name: string;
};
type ClickWithdraw = {
    event: 'click-withdraw';
    name: string;
};
type SelectLanguage = {
    event: 'select-language';
    name: string;
};
export declare const useTrackEvent: () => (args: FromChainSelect | ToChainSelect | TokenSelect | HighlightedTokenSelect | TokenBannerClick | Bridge | OpenActivity | CloseActivity | ClickDeposit | ClickWithdraw | SelectLanguage) => void;
export declare const useTrackBridgeEvent: () => (provider: RouteProvider, hash: string) => void;
export {};
