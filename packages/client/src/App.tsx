import React, { useMemo } from 'react';
import Routes from './routes';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Breakpoints, FlexCenterMixin } from './Theme';
import { useDarkMode } from './hooks/useDarkMode';

const App = () => {
	const { mode } = useDarkMode();

	const Theme = useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: mode,
				},
				...Breakpoints,
				mixins: {
					flexCenter: { ...FlexCenterMixin },
				},
			}),
		[ mode ]
	);

	return (
		<ThemeProvider theme={Theme}>
			<Routes />
		</ThemeProvider>
	);
};

export default App;
