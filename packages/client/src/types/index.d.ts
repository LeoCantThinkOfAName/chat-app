import { CSSProperties } from '@material-ui/core/styles/withStyles';

import { UserStatusColor } from '../Theme';

declare module "@material-ui/core/styles/createMixins" {
  export interface Mixins {
    flexCenter: CSSProperties;
  }
}

declare module "@material-ui/core/styles/createPalette" {
  export interface Palette {
    userStatus: UserStatusColor;
  }
}
