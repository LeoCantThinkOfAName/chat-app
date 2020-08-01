import { useContext, useEffect } from "react";
import { AppContext, AppState, initValue } from "../context/AppContext";
import { useLocalStorage } from "./useLocalStorage";

export const useAppContext = () => {
  const {theme, mode, setTheme, setMode} = useContext(AppContext);
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
    } else {
      return 
    }
  }, [theme, mode, setValue, storedValue]);

  return {theme, mode, setTheme, setMode};
}