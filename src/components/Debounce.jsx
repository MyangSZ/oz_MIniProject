import { useEffect, useState } from "react";

export const useDebounce = (value, delay = 5000) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(debounceTimer);
  }, [value, delay]);
  return debounceValue;
};
