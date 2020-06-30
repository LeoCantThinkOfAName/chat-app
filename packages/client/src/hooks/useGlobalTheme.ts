import { useContext, useEffect } from "react";
import { AppContext, AppContextInterface } from "../context/AppContext";
import { useLocalStorage } from "./useLocalStorage";

export const useGlobalTheme = () => {
  const [storedValue, setValue] = useLocalStorage<AppContextInterface>({
    key: "app",
  });
  const {
    theme: { getter, setter },
  } = useContext(AppContext);

  useEffect(() => {
    setValue({
      ...storedValue,
      theme: getter,
    });
  }, [getter]);

  return { theme: getter, setTheme: setter };
};
