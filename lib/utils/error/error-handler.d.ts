import { ErrorCode, ErrorInfo } from './error-codes';
interface ErrorConfig {
    showToast?: boolean;
    logError?: boolean;
    locale?: 'en' | 'zh';
}
/**
 * Error Handler Class
 */
export declare class ErrorHandler {
    private config;
    constructor(config?: ErrorConfig);
    /**
     * Main method to handle errors
     */
    handleError(error: unknown, customCode?: ErrorCode, customMessage?: string): ErrorInfo;
    /**
     * Get custom error information
     */
    private getCustomErrorInfo;
    /**
     * Analyze error type
     */
    private analyzeError;
    /**
     * Analyze Error object
     */
    private analyzeErrorObject;
    /**
     * Check if it's a wallet rejection error
     */
    private isWalletRejection;
    /**
     * Analyze string error
     */
    private analyzeErrorString;
    /**
     * Analyze HTTP error
     */
    private analyzeHttpError;
    /**
     * Show error toast
     */
    private showToast;
    /**
     * Log error
     */
    private logError;
    /**
     * Handle error silently (no user prompt)
     */
    handleErrorSilently(error: unknown, customCode?: ErrorCode): ErrorInfo;
    /**
     * Update configuration
     */
    updateConfig(config: Partial<ErrorConfig>): void;
}
export declare const errorHandler: ErrorHandler;
export declare const handleError: (error: unknown, customCode?: ErrorCode, customMessage?: string) => ErrorInfo;
export declare const handleErrorSilently: (error: unknown, customCode?: ErrorCode) => ErrorInfo;
/**
 * Handle API business error specifically
 * @param response - API response data
 * @param customMessage - Optional custom error message
 */
export declare const handleApiBusinessError: (response: {
    code: number;
    message?: string;
}, customMessage?: string) => boolean;
/**
 * Check if API response indicates business error
 * @param response - API response data
 * @returns true if business error, false otherwise
 */
export declare const isApiBusinessError: (response: {
    code: number;
}) => boolean;
export {};
