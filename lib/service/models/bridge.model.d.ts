import { RouteProvider } from '../../common/consts/route-provider';
import { ChainDto } from './chain.model';
import { MultiChainToken } from './token.model';
export interface BridgeConfigDto {
    id: string;
    host: string;
    name: string;
    defaultRoute: {
        id: RouteProvider;
        fromChainId: number;
        toChainId: number;
        tokenAddress: string;
    };
    chains: ChainDto[];
    tokens: MultiChainToken;
    metadata: MetadataDto;
    theme: ThemeDto;
    createdAt?: string;
    updatedAt?: string;
    thirdParty: {
        googleAnalytics?: {
            gId: string;
        };
        sentry?: {
            dsn: string;
        };
    };
}
export interface MetadataDto {
    title: string;
    description: string;
    favicon: string;
    og: string;
    twitter: string;
    url: string;
    learnMoreUrl: string;
}
export interface ThemeDto {
    primary?: string;
    primaryDark?: string;
    background?: string;
    backgroundDark?: string;
    foreground?: string;
    foregroundDark?: string;
    imageBackground?: string;
    imageBackgroundDark?: string;
    imageLogo?: string;
    imageLogoDark?: string;
    imageLogoSmall?: string;
    imageLogoSmallDark?: string;
}
export interface BridgeAmountLimitsDto {
    fromChainId: string;
    toChainId: string;
    tokenAddress: string;
    limits: {
        minValue: string;
        maxValue: string;
        tokenFee: {
            feeWei: string;
            feeBP: string;
        };
        minNetValue: string;
        maxNetValuePerTx: string;
    };
    token: {
        symbol: string;
        name: string;
        decimals: number;
    };
}
