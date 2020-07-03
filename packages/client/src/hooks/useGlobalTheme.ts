import { useContext, useEffect } from "react";
import { AppContext, AppState } from "../context/AppContext";
import { useLocalStorage } from "./useLocalStorage";

export const useGlobalTheme = () => {
  const [storedValue, setValue] = useLocalStorage<AppState>({
    key: "app",
  });
  const { theme, setTheme } = useContext(AppContext);

  useEffect(() => {
    setValue({
      ...storedValue,
      theme,
    });
  }, [theme]);

  return { theme, setTheme };
};
