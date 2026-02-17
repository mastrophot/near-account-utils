/**
 * Helpers for constructing batch operations data structures.
 */

export interface Action {
  type: string;
  params: any;
}

/**
 * Creates a Transfer action.
 */
export function transferAction(amount: string): Action {
  return { type: 'Transfer', params: { deposit: amount } };
}

/**
 * Creates a FunctionCall action.
 */
export function functionCallAction(
  methodName: string,
  args: object | Uint8Array,
  gas: string,
  deposit: string
): Action {
  return {
    type: 'FunctionCall',
    params: { methodName, args, gas, deposit }
  };
}

/**
 * Combines multiple actions into a batch structure.
 */
export function createBatch(receiverId: string, actions: Action[]) {
  return {
    receiverId,
    actions,
  };
}
