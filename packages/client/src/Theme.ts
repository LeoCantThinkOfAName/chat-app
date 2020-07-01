import {
  ThemeOptions,
  SimplePaletteColorOptions,
} from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
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

export type ThemeTypes = keyof Themes;

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

export const FlexCenterMixin: CSSProperties = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
};

const ThemesMap = {
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
};

const AppThemes: Partial<Themes> = {};

Object.keys(ThemesMap).forEach(
  (key) =>
    (Object.assign(AppThemes)[key] = {
      light: ThemesMap[key as ThemeTypes][300],
      main: ThemesMap[key as ThemeTypes][500],
      dark: ThemesMap[key as ThemeTypes][900],
    })
);

export { AppThemes };
