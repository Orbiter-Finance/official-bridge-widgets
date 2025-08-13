export declare class RpcManager {
    private availableRpcs;
    private failedRpcs;
    private activeRequests;
    private maxParallel;
    constructor(maxParallel?: number);
    markRpcAvailable(rpc: string): void;
    markRpcFailed(rpc: string): void;
    getAvailableRpcs(allRpcs: string[]): string[];
    resetAllFailures(): void;
    getRpcStatus(): {
        available: [string, number][];
        failed: string[];
        activeRequests: number;
        maxParallel: number;
    };
    getStats(): {
        totalAvailable: number;
        totalFailed: number;
        activeRequests: number;
        maxParallel: number;
        availableRpcs: [string, number][];
        failedRpcs: string[];
    };
    executeRpcRequest<T>(rpcs: string[], requestFn: (rpc: string) => Promise<T>, options?: {
        onSuccess?: (rpc: string, result: T) => void;
        onError?: (rpc: string, error: unknown) => void;
        requestId?: string;
    }): Promise<T | null>;
    private getAvailableRpcsWithFallback;
    private executeParallelRequests;
    private createRequest;
    private handleRequestError;
    private waitForNextCompletion;
    private tryAddNextRpc;
    private abortAllRequests;
}
export declare const rpcManager: RpcManager;
export declare const getRpcManagerStatus: () => {
    available: [string, number][];
    failed: string[];
    activeRequests: number;
    maxParallel: number;
};
export declare const getRpcManagerStats: () => {
    totalAvailable: number;
    totalFailed: number;
    activeRequests: number;
    maxParallel: number;
    availableRpcs: [string, number][];
    failedRpcs: string[];
};
export declare const resetAllRpcFailures: () => void;
export { healthCheckRpcs, testGasEstimation, getHealthCheckResults, getWhitelistRpcs, getBlacklistRpcs, clearHealthCheckResults } from './rpc-health-check';
