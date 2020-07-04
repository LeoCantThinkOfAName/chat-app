import { useContext, useEffect } from "react";
import { AppContext, AppState, initValue } from "../context/AppContext";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const { mode, setMode } = useContext(AppContext);
  const [storedValue, setValue] = useLocalStorage<AppState>({
    key: "app",
    initValue
  });

  useEffect(() => {
    if (storedValue.mode !== mode) {
      setValue({
        ...storedValue,
        mode,
      });
    }
  }, [mode, storedValue, setValue]);

  return { mode, setMode };
};
