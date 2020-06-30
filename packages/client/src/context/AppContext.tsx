import React, { useState } from "react";
import { ThemeTypes } from "../Theme";
import { PaletteType } from "@material-ui/core";
import { useLocalStorage } from "../hooks/useLocalStorage";

export interface AppContextInterface {
  mode: PaletteType;
  theme: ThemeTypes;
}

interface StateInterface<T> {
  getter: T;
  setter: React.Dispatch<React.SetStateAction<T>>;
}

export interface AppContextValue {
  mode: StateInterface<PaletteType>;
  theme: StateInterface<ThemeTypes>;
}

export const AppContext = React.createContext<AppContextValue>({
  mode: {
    getter: "light",
    setter: () => "light",
  },
  theme: {
    getter: "blue",
    setter: () => "blue",
  },
});

export const AppProvider: React.FC = ({ children }) => {
  const [storedValue] = useLocalStorage<AppContextInterface>({
    key: "app",
    initValue: {
      mode: "light",
      theme: "blue",
    },
  });
  const [theme, setTheme] = useState<ThemeTypes>(storedValue.theme);
  const [mode, setMode] = useState<PaletteType>(storedValue.mode);

  return (
    <AppContext.Provider
      value={{
        mode: {
          getter: mode,
          setter: setMode,
        },
        theme: {
          getter: theme,
          setter: setTheme,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
