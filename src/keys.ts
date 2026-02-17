/**
 * Utilities for NEAR access keys.
 */

export interface AccessKey {
  nonce: number;
  permission: 'FullAccess' | FunctionCallPermission;
}

export interface FunctionCallPermission {
  allowance: string | null;
  receiver_id: string;
  method_names: string[];
}

/**
 * Checks if a key has full access permission.
 */
export function isFullAccessKey(key: AccessKey): boolean {
  return key.permission === 'FullAccess';
}

/**
 * Checks if a key has function call permission.
 */
export function isFunctionCallKey(key: AccessKey): boolean {
  return typeof key.permission === 'object' && 'receiver_id' in key.permission;
}

/**
 * Helper to generate a function call permission object.
 */
export function createFunctionCallPermission(
  receiverId: string,
  methodNames: string[] = [],
  allowance: string | null = null
): FunctionCallPermission {
  return {
    allowance,
    receiver_id: receiverId,
    method_names: methodNames,
  };
}
