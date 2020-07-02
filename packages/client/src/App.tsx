import React, { useMemo } from "react";
import Routes from "./routes";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Breakpoints, FlexCenterMixin, AppThemes, Overrides } from "./Theme";
import { useDarkMode } from "./hooks/useDarkMode";
import { useGlobalTheme } from "./hooks/useGlobalTheme";

const App = () => {
  const { mode } = useDarkMode();
  const { theme } = useGlobalTheme();

  const Theme = useMemo(
    () =>
      createMuiTheme({
        overrides: Overrides,
        palette: {
          type: mode,
          primary: {
            ...AppThemes[theme],
          },
        },
        ...Breakpoints,
        mixins: {
          flexCenter: { ...FlexCenterMixin },
        },
      }),
    [mode, theme]
  );

  return (
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
