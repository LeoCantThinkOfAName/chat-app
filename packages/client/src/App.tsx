import React from 'react';
import Routes from './routes';
import {ThemeProvider} from '@material-ui/core/styles'
import { Theme } from './Theme';

const App = () => {
	return (
		<ThemeProvider theme={Theme}>
			<Routes />
		</ThemeProvider>
	);
};

export default App;
