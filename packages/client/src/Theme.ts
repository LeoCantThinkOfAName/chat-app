import {
  ThemeOptions,
  SimplePaletteColorOptions,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { Overrides as OverridesProps } from "@material-ui/core/styles/overrides";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { UserStatus } from '../../shared/src/User';
import {
  red,
  pink,
  purple,
  blue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
} from "@material-ui/core/colors";

export interface Themes {
  red: SimplePaletteColorOptions;
  pink: SimplePaletteColorOptions;
  purple: SimplePaletteColorOptions;
  blue: SimplePaletteColorOptions;
  cyan: SimplePaletteColorOptions;
  teal: SimplePaletteColorOptions;
  green: SimplePaletteColorOptions;
  lightGreen: SimplePaletteColorOptions;
  lime: SimplePaletteColorOptions;
  yellow: SimplePaletteColorOptions;
  amber: SimplePaletteColorOptions;
  orange: SimplePaletteColorOptions;
  deepOrange: SimplePaletteColorOptions;
  brown: SimplePaletteColorOptions;
  grey: SimplePaletteColorOptions;
  blueGrey: SimplePaletteColorOptions;
}

export interface ThemeInterface {
  light: string;
  main: string;
  dark: string;
}

export type ThemeTypes = keyof Themes;
export type UserStatusColor = Record<UserStatus, string>;

export const Breakpoints: ThemeOptions = {
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 960,
      xl: 1280,
    },
  },
};

export const Overrides: OverridesProps = {
  MuiCssBaseline: {
    "@global": {
      "html,body,#root": {
        height: "100%",
      },
    },
  },
};

export const FlexCenterMixin: CSSProperties = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
};

export const AppThemes: Record<keyof Themes, ThemeInterface> = {
  red: {
    light: red[300],
    main: red[500],
    dark: red[900],
  },
  pink: {
    light: pink[300],
    main: pink[500],
    dark: pink[900],
  },
  purple: {
    light: purple[300],
    main: purple[500],
    dark: purple[900],
  },
  blue: {
    light: blue[300],
    main: blue[500],
    dark: blue[900],
  },
  cyan: {
    light: cyan[300],
    main: cyan[500],
    dark: cyan[900],
  },
  teal: {
    light: teal[300],
    main: teal[500],
    dark: teal[900],
  },
  green: {
    light: green[300],
    main: green[500],
    dark: green[900],
  },
  lightGreen: {
    light: lightGreen[300],
    main: lightGreen[500],
    dark: lightGreen[900],
  },
  lime: {
    light: lime[300],
    main: lime[500],
    dark: lime[900],
  },
  yellow: {
    light: yellow[300],
    main: yellow[500],
    dark: yellow[900],
  },
  amber: {
    light: amber[300],
    main: amber[500],
    dark: amber[900],
  },
  orange: {
    light: orange[300],
    main: orange[500],
    dark: orange[900],
  },
  deepOrange: {
    light: deepOrange[300],
    main: deepOrange[500],
    dark: deepOrange[900],
  },
  brown: {
    light: brown[300],
    main: brown[500],
    dark: brown[900],
  },
  grey: {
    light: grey[300],
    main: grey[500],
    dark: grey[900],
  },
  blueGrey: {
    light: blueGrey[300],
    main: blueGrey[500],
    dark: blueGrey[900],
  },
};

export const useGlobalStyles = makeStyles((theme: Theme) =>
  createStyles({
    emptyPagePlaceholder: {
      color: theme.palette.grey[500],
    },
  })
);

export const UserStatusColorScheme: UserStatusColor = {
  online: green[500],
  offline: grey[500],
  afk: orange[500],
}
