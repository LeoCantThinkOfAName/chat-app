import { useContext, useEffect } from "react";
import { AppContext, AppContextInterface } from "../context/AppContext";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [storedValue, setValue] = useLocalStorage<AppContextInterface>({
    key: "app",
  });
  const {
    mode: { getter, setter },
  } = useContext(AppContext);

  useEffect(() => {
    setValue({
      ...storedValue,
      mode: getter,
    });
  }, [getter]);

  return { mode: getter, setMode: setter };
};
