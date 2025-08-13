import { I18n } from './I18n';
export type Locale = 'en-US' | 'zh-CN';
export declare const i18n: I18n;
export declare function setLocale(locale: Locale): Promise<void>;
