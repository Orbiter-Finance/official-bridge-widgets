import { Token } from '../../service/models/token.model';
export declare const deadAddress = "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000";
export interface MultiChainToken {
    [chainId: number]: Token | undefined;
}
export declare const isEth: (token?: Token | null) => boolean;
export declare const isNativeToken: (token: MultiChainToken | null) => boolean;
