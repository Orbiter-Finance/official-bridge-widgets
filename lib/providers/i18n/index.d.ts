import { ReactNode } from 'react';
import { Locale, i18n } from '../../locales/index';
export interface I18nProviderProps {
    children: ReactNode;
    locale?: Locale;
}
export declare const I18nContext: import('react').Context<{
    i18n: typeof i18n;
}>;
export declare const useI18n: () => {
    i18n: typeof i18n;
};
export declare const useTranslation: () => import('../../locales/I18n').I18n;
export declare const I18nProvider: ({ children, locale }: I18nProviderProps) => import("react/jsx-runtime").JSX.Element;
