export interface RpcHealthResult {
    rpc: string;
    isHealthy: boolean;
    responseTime: number;
    successRate: number;
    lastTested: number;
    errorCount: number;
    successCount: number;
    lastError?: string;
    category: 'whitelist' | 'blacklist' | 'unknown';
}
export interface HealthCheckConfig {
    timeout: number;
    maxRetries: number;
    minSuccessRate: number;
    maxResponseTime: number;
    testTransactions: Array<{
        to: string;
        value: string;
        data: string;
        from: string;
    }>;
}
/**
 * Perform health check on multiple RPCs in parallel
 */
export declare function healthCheckRpcs(rpcs: string[], config?: Partial<HealthCheckConfig>): Promise<Map<string, RpcHealthResult>>;
/**
 * Get health check results for all tested RPCs
 */
export declare function getHealthCheckResults(): Map<string, RpcHealthResult>;
/**
 * Get whitelist RPCs based on health check results
 */
export declare function getWhitelistRpcs(): string[];
/**
 * Get blacklist RPCs based on health check results
 */
export declare function getBlacklistRpcs(): string[];
/**
 * Clear all health check results
 */
export declare function clearHealthCheckResults(): void;
/**
 * Test gas estimation with specific transaction data
 */
export declare function testGasEstimation(rpcs: string[], transactions: Array<{
    to: string;
    value: string;
    data: string;
    from: string;
}>, testName?: string): Promise<void>;
