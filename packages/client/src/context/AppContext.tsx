import React, { useState } from "react";
import { ThemeTypes } from "../Theme";
import { PaletteType } from "@material-ui/core";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { UserStatus } from '../../../shared/src/User';

export interface AppState {
  mode: PaletteType;
  theme: ThemeTypes;
  status: UserStatus;
}

export interface AppSetState {
  setMode: React.Dispatch<React.SetStateAction<PaletteType>>;
  setTheme: React.Dispatch<React.SetStateAction<ThemeTypes>>;
  setStatus: React.Dispatch<React.SetStateAction<UserStatus>>;
}

export type AppContextType = AppState & AppSetState;

export const AppContext = React.createContext<AppContextType>({
  mode: "light",
  theme: "blue",
  status: "online",
  setMode: (state) => state,
  setTheme: (state) => state,
  setStatus: (state) => state,
});

export const initValue: AppState = {
  theme: "blue",
  mode: "light",
  status: "online"
}

export const AppProvider: React.FC = ({ children }) => {
  const [storedValue] = useLocalStorage<AppState>({
    key: "app",
    initValue
  });
  const [theme, setTheme] = useState<ThemeTypes>(storedValue.theme);
  const [mode, setMode] = useState<PaletteType>(storedValue.mode);
  const [status, setStatus] = useState<UserStatus>(storedValue.status);

  return (
    <AppContext.Provider
      value={{
        mode,
        theme,
        status,
        setTheme,
        setMode,
        setStatus
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
