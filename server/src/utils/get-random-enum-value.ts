export function getRandomEnumValue<T>(enumeration: T): T[keyof T] {
  const values = Object.keys(enumeration).filter(
    (value) => !(parseInt(value) >= 0),
  );

  const enumKey = values[Math.floor(Math.random() * values.length)];
  return enumeration[enumKey];
}
