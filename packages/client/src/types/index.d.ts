import { Mixins } from '@material-ui/core/styles/createMixins';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

declare module '@material-ui/core/styles/createMixins' {
	export interface Mixins {
		flexCenter: CSSProperties;
	}
}
