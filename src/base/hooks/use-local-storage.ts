/* eslint-disable no-console */
import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const item = window.localStorage.getItem(key);

    setStoredValue(item ? JSON.parse(item) : initialValue);
  }, [key, setStoredValue]);

  return [storedValue, setValue] as const;
};
