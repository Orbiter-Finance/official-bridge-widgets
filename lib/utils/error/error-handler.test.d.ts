export declare function fetchUserData(userId: string): Promise<any>;
export declare function createOrder(orderData: any): Promise<any>;
export declare function transferTokens(amount: string, to: string): Promise<boolean>;
export declare function connectWallet(): Promise<boolean>;
export declare function handleFormSubmit(event: React.FormEvent): void;
export declare function initiateBridge(fromChain: string, toChain: string, amount: string): Promise<any>;
export declare function sendTransaction(transaction: any): Promise<any>;
export declare function fetchWithRetry(url: string, retries?: number): Promise<any>;
export declare function handleErrorWithCustomConfig(error: unknown): import('./error-codes').ErrorInfo;
export declare function createErrorBoundary(): {
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
};
export declare function testBusinessErrorCodeMapping(): void;
