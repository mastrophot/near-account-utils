/**
 * Validates a NEAR account ID according to official rules.
 * @param accountId The account ID to validate.
 * @returns true if valid, false otherwise.
 */
export function isValidAccountId(accountId: string): boolean {
  if (!accountId) return false;
  if (accountId.length < 2 || accountId.length > 64) return false;

  // Regex for account ID validation:
  // - Starts with alphanumeric char
  // - Contains only lowercase alphanumeric characters, underscores (_), and hyphens (-)
  // - Can also contain dots (.) separating segments
  // - Each segment must follow the same rules as above
  const accountIdRegex = /^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$/;
  return accountIdRegex.test(accountId);
}

/**
 * Checks if an account ID is an implicit account (64-character hex).
 * @param accountId The account ID to check.
 * @returns true if it looks like an implicit account ID.
 */
export function isImplicitAccountId(accountId: string): boolean {
  return /^[a-f\d]{64}$/.test(accountId);
}

/**
 * Checks if an account ID is a named account (contains dots or is short).
 * @param accountId The account ID to check.
 * @returns true if it is a named account.
 */
export function isNamedAccountId(accountId: string): boolean {
  return isValidAccountId(accountId) && !isImplicitAccountId(accountId);
}

/**
 * Normalizes an account ID by converting it to lowercase and trimming whitespace.
 * @param accountId The account ID to normalize.
 * @returns The normalized account ID.
 */
export function normalizeAccountId(accountId: string): string {
  return accountId.trim().toLowerCase();
}
