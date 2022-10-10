/**
 * Checks if the given value is a `Record<string, unknown>`.
 */
export function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object';
}

export function assert(
  message: string,
  condition?: unknown
): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}