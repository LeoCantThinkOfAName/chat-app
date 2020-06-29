import React, { useState } from "react";
import { ThemeTypes } from "../Theme";
import { PaletteType } from "@material-ui/core";

export type LanguageTuple = "en" | "zh-TW";

interface StateInterface<T> {
  getter: T;
  setter: React.Dispatch<React.SetStateAction<T>>;
}

export interface AppContextInterface {
  mode: StateInterface<PaletteType>;
  theme: StateInterface<ThemeTypes>;
  language: StateInterface<LanguageTuple>;
}

export const AppContext = React.createContext<AppContextInterface>({
  mode: {
    getter: "light",
    setter: () => "light",
  },
  theme: {
    getter: "blue",
    setter: () => "blue",
  },
  language: {
    getter: "en",
    setter: () => "en",
  },
});

export const AppProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeTypes>("blue");
  const [mode, setMode] = useState<PaletteType>("light");
  const [language, setLanguage] = useState<LanguageTuple>("en");

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
        language: {
          getter: language,
          setter: setLanguage,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
