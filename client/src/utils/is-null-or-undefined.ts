export function isUndefined<T>(value: T | undefined): value is undefined {
  return value === undefined;
}

export function isNull<T>(value: T | null): value is null {
  return value === null;
}

export function isNullOrUndefined<T>(
  value: T | null | undefined
): value is null | undefined {
  return value === null || value === undefined;
}
