import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import { PagesProps } from './Pages';
import Login from './pages/Login';

interface Props {
	routes: PagesProps[];
}

const Routes: React.FC<Props> = ({ routes }) => {
	return (
		<Router>
			<Switch>
				<Route exact path="/login">
					<Login />
				</Route>
				{routes.map((page) => (
					<Route exact path={page.path} key={page.path}>
						<Layout>{page.component}</Layout>
					</Route>
				))}
			</Switch>
		</Router>
	);
};

export default Routes;
