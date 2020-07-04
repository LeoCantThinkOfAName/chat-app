import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useMemo } from "react";

import Routes from "./routes";
import { AppThemes, Breakpoints, FlexCenterMixin, Overrides } from "./Theme";
import { useAppContext } from "./hooks/useAppContext";

const App = () => {
  const {theme, mode} = useAppContext();

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
