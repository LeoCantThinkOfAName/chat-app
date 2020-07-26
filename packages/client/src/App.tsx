import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React, { useMemo } from 'react';

import { useAppContext } from './hooks/useAppContext';
import { Pages } from './Pages';
import Routes from './routes';
import { AppThemes, Breakpoints, FlexCenterMixin, Overrides, UserStatusColorScheme } from './Theme';
import { UserProvider } from './context/UserContext';

const App = () => {
	const { theme, mode } = useAppContext();

	const Theme = useMemo(
		() =>
			createMuiTheme({
				overrides: Overrides,
				palette: {
					type: mode,
					primary: {
						...AppThemes[theme],
					},
					userStatus: UserStatusColorScheme,
				},
				...Breakpoints,
				mixins: {
					flexCenter: { ...FlexCenterMixin },
				},
			}),
		[ mode, theme ]
	);

	return (
		<ThemeProvider theme={Theme}>
			<UserProvider>
				<CssBaseline />
				<Routes routes={Pages} />
			</UserProvider>
		</ThemeProvider>
	);
};

export default App;
