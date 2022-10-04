import { useEffect, useRef } from 'react';

export function useHasValueChanged<T>(currentValue: T): boolean {
  const prevVal = useGetPreviousValue<T>(currentValue);
  return prevVal !== currentValue;
}

function useGetPreviousValue<T>(currentValue: T) {
  const prevValueRef = useRef<T>();
  useEffect(() => {
    prevValueRef.current = currentValue;
  });
  return prevValueRef.current;
}
