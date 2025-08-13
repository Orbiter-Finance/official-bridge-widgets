/**
 * Run comprehensive health check test
 */
declare function runHealthCheckTest(): Promise<void>;
/**
 * Run quick connectivity test
 */
declare function runQuickTest(): Promise<void>;
export { runHealthCheckTest, runQuickTest };
