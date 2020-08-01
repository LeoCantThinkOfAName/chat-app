import React, { useState } from "react";
import { ThemeTypes } from "../Theme";
import { PaletteType } from "@material-ui/core";
import { useLocalStorage } from "../hooks/useLocalStorage";

export interface AppState {
  mode: PaletteType;
  theme: ThemeTypes;
}

export interface AppSetState {
  setMode: React.Dispatch<React.SetStateAction<PaletteType>>;
  setTheme: React.Dispatch<React.SetStateAction<ThemeTypes>>;
}

export type AppContextType = AppState & AppSetState;

export const AppContext = React.createContext<AppContextType>({
  mode: "light",
  theme: "blue",
  setMode: (state) => state,
  setTheme: (state) => state,
});

export const initValue: AppState = {
  theme: "blue",
  mode: "light",
}

export const AppProvider: React.FC = ({ children }) => {
  const [storedValue] = useLocalStorage<AppState>({
    key: "app",
    initValue
  });
  const [theme, setTheme] = useState<ThemeTypes>(storedValue.theme);
  const [mode, setMode] = useState<PaletteType>(storedValue.mode);

  return (
    <AppContext.Provider
      value={{
        mode,
        theme,
        setTheme,
        setMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
