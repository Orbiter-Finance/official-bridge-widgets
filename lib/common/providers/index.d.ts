import { ReactNode } from 'react';
import { BridgeConfig } from '../../types';
export declare function Providers({ children, network, resolvedTheme, locale }: {
    children: ReactNode;
    locale: BridgeConfig['locale'];
    resolvedTheme: BridgeConfig['theme'];
    network: BridgeConfig['network'];
}): import("react/jsx-runtime").JSX.Element;
