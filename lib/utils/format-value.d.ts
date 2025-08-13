/**
 * Format the value of a transaction to a hex string
 * @param value - The value to format (string, number, or bigint)
 * @returns A hex string representation of the value
 * @throws Error if the input is invalid or cannot be converted
 */
export declare const formatTxValue: (value: string | number | bigint) => string;
/**
 * Safe version of formatTxValue that returns a default value instead of throwing
 * @param value - The value to format
 * @param defaultValue - The default value to return if conversion fails (default: '0x0')
 * @returns A hex string representation of the value or the default value
 */
export declare const formatTxValueSafe: (value: string | number | bigint, defaultValue?: string) => string;
