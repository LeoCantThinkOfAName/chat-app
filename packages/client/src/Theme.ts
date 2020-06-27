import {createMuiTheme, ThemeOptions} from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const Breakpoints: ThemeOptions = {
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 960,
      xl: 1280
    }
  }
};

const FlexCenterMixin: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

export const Theme = createMuiTheme({
  ...Breakpoints,
  mixins: {
    flexCenter: {...FlexCenterMixin},
  }
});