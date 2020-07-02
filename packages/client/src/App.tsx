import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useMemo } from "react";

import { useDarkMode } from "./hooks/useDarkMode";
import { useGlobalTheme } from "./hooks/useGlobalTheme";
import Routes from "./routes";
import { AppThemes, Breakpoints, FlexCenterMixin, Overrides } from "./Theme";

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
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
