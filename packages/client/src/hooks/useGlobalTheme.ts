import { useContext, useEffect } from "react";
import { AppContext, AppState, initValue } from "../context/AppContext";
import { useLocalStorage } from "./useLocalStorage";

export const useGlobalTheme = () => {
  const { theme, setTheme } = useContext(AppContext);
  const [storedValue, setValue] = useLocalStorage<AppState>({
    key: "app",
    initValue
  });

  useEffect(() => {
    if (storedValue.theme !== theme) {
      setValue({
        ...storedValue,
        theme,
      });
    }
  }, [theme, storedValue, setValue]);

  return { theme, setTheme };
};
