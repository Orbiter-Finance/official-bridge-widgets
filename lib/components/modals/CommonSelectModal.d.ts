import { default as React } from 'react';
import { DialogPortalProps } from '@radix-ui/react-dialog';
export interface BaseSelectItem {
    id: string | number;
}
interface CommonSelectModalProps<T extends BaseSelectItem> {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    onSelectItem: (item: T) => void;
    searchPlaceholder: string;
    popularItems?: T[];
    renderPopularItem?: (item: T, onSelectItem: (item: T) => void) => React.ReactNode;
    isLoading?: boolean;
    keyword?: string;
    onKeywordChange?: (keyword: string) => void;
    onPopularClick?: (item: T) => void;
    container?: DialogPortalProps['container'];
}
export declare const CommonSelectModal: <T extends BaseSelectItem>({ isOpen, onClose, title, items, renderItem, onSelectItem, searchPlaceholder, popularItems, renderPopularItem, isLoading, keyword, onKeywordChange, container }: CommonSelectModalProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
