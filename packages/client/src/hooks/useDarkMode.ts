import { useContext, useEffect } from "react";
import { AppContext, AppState } from "../context/AppContext";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [storedValue, setValue] = useLocalStorage<AppState>({
    key: "app",
  });
  const { mode, setMode } = useContext(AppContext);

  useEffect(() => {
    setValue({
      ...storedValue,
      mode,
    });
  }, [mode]);

  return { mode, setMode };
};
