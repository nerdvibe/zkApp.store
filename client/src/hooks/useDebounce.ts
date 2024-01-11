import { useState, useEffect } from "react";

// A debounce hook that accepts a value and a delay, and returns a debounced value
function useDebounce<T>(value: T, delay: number): T {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(
    () => {
      // Set debouncedValue to value (passed in) after the specified delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Return a cleanup function that will be called every time useEffect is re-called.
      // useEffect will only be re-called if value changes (see the inputs array below).
      // This is how we prevent debouncedValue from changing if value is changed within the delay period.
      // Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    // Only re-call effect if value changes
    // You could also include the delay here, if you want to change it dynamically.
    [value, delay]
  );

  return debouncedValue;
}

export default useDebounce;
