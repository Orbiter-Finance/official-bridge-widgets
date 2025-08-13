import { default as React } from 'react';
export type Theme = 'light' | 'dark';
export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}
export declare const ThemeContext: React.Context<ThemeContextType | undefined>;
export declare const useTheme: () => ThemeContextType;
export declare const ThemeProvider: React.FC<{
    children: React.ReactNode;
    theme?: Theme;
}>;
