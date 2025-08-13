/**
 * Error Code Enumeration and Error Handling
 *
 * Defines common interface error codes and provides unified error handling mechanism
 */
export declare enum HttpStatus {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    CONFLICT = 409,
    UNPROCESSABLE_ENTITY = 422,
    TOO_MANY_REQUESTS = 429,
    INTERNAL_SERVER_ERROR = 500,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504
}
export declare enum ErrorCode {
    SUCCESS = 0,
    UNKNOWN_ERROR = 1000,
    INVALID_PARAMETER = 1001,
    REQUEST_TIMEOUT = 1002,
    NETWORK_ERROR = 1003,
    UNAUTHORIZED = 2000,
    INVALID_TOKEN = 2001,
    TOKEN_EXPIRED = 2002,
    WALLET_NOT_CONNECTED = 4000,
    INSUFFICIENT_BALANCE = 4001,
    INSUFFICIENT_GAS = 4002,
    WALLET_REJECTED = 4003,
    TRANSACTION_FAILED = 4004,
    TRANSACTION_TIMEOUT = 4005,
    NONCE_TOO_LOW = 4006,
    NONCE_TOO_HIGH = 4007,
    GAS_LIMIT_EXCEEDED = 4008,
    GAS_PRICE_TOO_LOW = 4009,
    EXECUTION_REVERTED = 4010,
    BRIDGE_PAUSED = 5000,
    BRIDGE_DISABLED = 5001,
    AMOUNT_TOO_SMALL = 5002,
    AMOUNT_TOO_LARGE = 5003,
    INSUFFICIENT_LIQUIDITY = 5004,
    NO_ROUTE_FOUND = 5005,
    ROUTE_EXPIRED = 5006,
    CHAIN_NOT_SUPPORTED = 8000,
    RPC_ERROR = 8001,
    RPC_TIMEOUT = 8002
}
export declare const ERROR_MESSAGES: Record<ErrorCode, string>;
export declare const ERROR_MESSAGES_EN: Record<ErrorCode, string>;
export declare enum ErrorType {
    CLIENT_ERROR = "CLIENT_ERROR",
    SERVER_ERROR = "SERVER_ERROR",
    NETWORK_ERROR = "NETWORK_ERROR",
    BUSINESS_ERROR = "BUSINESS_ERROR",
    VALIDATION_ERROR = "VALIDATION_ERROR",
    AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR",
    WALLET_ERROR = "WALLET_ERROR",
    TRANSACTION_ERROR = "TRANSACTION_ERROR"
}
export declare enum ErrorSeverity {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    CRITICAL = "CRITICAL"
}
export interface ErrorInfo {
    code: ErrorCode;
    message: string;
    type: ErrorType;
    severity: ErrorSeverity;
    details?: string;
    timestamp?: number;
    requestId?: string;
}
/**
 * Get error information based on error code and locale
 * @param code - Error code
 * @param locale - Language locale ('zh' for Chinese, 'en' for English)
 * @returns Error information object
 */
export declare function getErrorInfo(code: ErrorCode, locale?: 'en' | 'zh'): ErrorInfo;
/**
 * Get error code from HTTP status code
 * @param status - HTTP status code
 * @returns Corresponding error code
 */
export declare function getErrorCodeFromHttpStatus(status: number): ErrorCode;
/**
 * Map business error code to existing error code
 * @param businessCode - Business error code from API response
 * @returns Corresponding error code
 */
export declare function mapBusinessErrorCode(businessCode: number): ErrorCode;
