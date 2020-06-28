import { createMuiTheme, ThemeOptions, SimplePaletteColorOptions } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export interface Themes {
	original: SimplePaletteColorOptions;
	green: SimplePaletteColorOptions;
	red: SimplePaletteColorOptions;
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

export const AppThemes: Themes = {
	original: {
		light: '#4791db',
		main: '#1976d2',
		dark: '#115293',
	},
	red: {
		light: '#ff7070',
		main: '#e63c3c',
		dark: '#872626',
	},
	green: {
		light: '#9be65e',
		main: '#7abf41',
		dark: '#539120',
	},
};
