import { useState } from "react";

interface Props<T> {
  key: string;
  initValue?: T;
}

export function useLocalStorage<T>(props: Props<T>): [T, (value: T) => void] {
  const { key, initValue } = props;
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initValue;
    } catch (err) {
      console.log(err);
      return initValue;
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.log(err);
    }
  };

  return [storedValue, setValue];
}
