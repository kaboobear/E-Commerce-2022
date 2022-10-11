type NonEmptyArray<T> = [T, ...T[]];

export function isEmpty<T>(array: T[]): array is [] {
  return array.length === 0;
}

export function isNotEmpty<T>(array: T[]): array is NonEmptyArray<T> {
  return array.length !== 0;
}
