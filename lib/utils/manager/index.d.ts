/**
 * Manager Module Index
 *
 * This module exports all manager-related utilities including
 * RPC management and error handling.
 */
export { RpcManager, rpcManager, getRpcManagerStatus, getRpcManagerStats, resetAllRpcFailures } from './rpc-manager';
export { BUSINESS_LOGIC_ERRORS, REAL_RPC_ERRORS, isBusinessLogicError, isRealRpcError, isRealRpcFailure } from './rpc-error';
