import { HTMLAttributes } from 'react';
export type IconType = 'CHAIN' | 'TOKEN' | 'BRIDGE_TOKEN' | 'CHAIN_COVER' | 'CUSTOM';
type BaseProps = HTMLAttributes<HTMLImageElement> & {
    size?: number;
    className?: string;
    containerClassName?: string;
};
type ChainTokenProps = {
    type: 'CHAIN' | 'TOKEN' | 'BRIDGE_TOKEN' | 'CHAIN_COVER';
    iconId?: string;
    src?: string;
};
type CustomProps = {
    type: 'CUSTOM';
    src: string;
    iconId?: string;
};
type OIconType = (ChainTokenProps | CustomProps) & BaseProps;
export declare function OIcon({ type, iconId, className, src, size, containerClassName, ...rest }: OIconType): import("react/jsx-runtime").JSX.Element;
export {};
