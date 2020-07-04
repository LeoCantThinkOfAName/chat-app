import { useContext, useEffect } from "react";
import { AppContext, AppState, initValue } from "../context/AppContext";
import { useLocalStorage } from "./useLocalStorage";

export const useAppContext = () => {
  const {theme, mode, status, setTheme, setMode, setStatus} = useContext(AppContext);
  const [storedValue, setValue] = useLocalStorage<AppState>({
    key: "app",
    initValue
  });

  useEffect(() => {
    if(storedValue.mode !== mode) {
      setValue({
        ...storedValue,
        mode
      })
    } else if (storedValue.theme !== theme) {
      setValue({
        ...storedValue,
        theme
      })
    } else if(storedValue.status !== status) {
      setValue({
        ...storedValue,
        status
      })
    } else {
      return 
    }
  }, [theme, mode, status, setValue, storedValue]);

  return {theme, mode, status, setTheme, setMode, setStatus};
}