import { normalizeAccountId, isImplicitAccountId } from './validation';

/**
 * Truncates an account ID for display purposes if it's too long.
 * @param accountId The account ID to truncate.
 * @param length The total length including ellipsis.
 * @returns The truncated account ID.
 */
export function truncateAccountId(accountId: string, length: number = 14): string {
  const Normalized = normalizeAccountId(accountId);
  if (Normalized.length <= length) return Normalized;
  
  const half = Math.floor((length - 3) / 2);
  return `${Normalized.substring(0, half)}...${Normalized.substring(Normalized.length - half)}`;
}

/**
 * Formats an account ID for display. For implicit accounts, it might truncate.
 * @param accountId The account ID to format.
 */
export function formatAccountIdForDisplay(accountId: string): string {
  if (isImplicitAccountId(accountId)) {
    return truncateAccountId(accountId);
  }
  return normalizeAccountId(accountId);
}
