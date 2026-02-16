import { isValidAccountId, isImplicitAccountId, isNamedAccountId, normalizeAccountId } from '../validation';

describe('NEAR Account Validation', () => {
  test('isValidAccountId', () => {
    expect(isValidAccountId('alice.near')).toBe(true);
    expect(isValidAccountId('bob-123.near')).toBe(true);
    expect(isValidAccountId('a'.repeat(64))).toBe(true);
    expect(isValidAccountId('a'.repeat(65))).toBe(false);
    expect(isValidAccountId('a')).toBe(false); // too short
    expect(isValidAccountId('ALICE.NEAR')).toBe(false); // must be lowercase
    expect(isValidAccountId('alice..near')).toBe(false);
    expect(isValidAccountId('.alice.near')).toBe(false);
    expect(isValidAccountId('alice.near.')).toBe(false);
    expect(isValidAccountId('alice_123')).toBe(true);
  });

  test('isImplicitAccountId', () => {
    const validHex = '1df233b2ea7ab652bd6c7babf00f6620c8fe8a3565b2d88b630d12970930233f';
    expect(isImplicitAccountId(validHex)).toBe(true);
    expect(isImplicitAccountId('alice.near')).toBe(false);
    expect(isImplicitAccountId(validHex.substring(0, 63))).toBe(false);
  });

  test('isNamedAccountId', () => {
    expect(isNamedAccountId('alice.near')).toBe(true);
    expect(isNamedAccountId('1df233b2ea7ab652bd6c7babf00f6620c8fe8a3565b2d88b630d12970930233f')).toBe(false);
  });

  test('normalizeAccountId', () => {
    expect(normalizeAccountId('  ALICE.near  ')).toBe('alice.near');
  });
});
