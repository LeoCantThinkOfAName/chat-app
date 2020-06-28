import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export interface Themes {
	original: {};
	green: {};
}

export type ThemeTypes = keyof Themes;

export const Breakpoints: ThemeOptions = {
	breakpoints: {
		keys: [ 'xs', 'sm', 'md', 'lg', 'xl' ],
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
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'center',
};
