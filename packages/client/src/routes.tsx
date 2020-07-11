import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout';
import { PagesProps } from './Pages';
import Login from './pages/Login';

interface Props {
	routes: PagesProps[];
}

const Routes: React.FC<Props> = ({ routes }) => {
	const [ login ] = useState(false);

	return (
		<Router>
			<Switch>
				<Route exact path="/login">
					<Login />
				</Route>
				{routes.map(
					(page) =>
						login ? (
							<Route exact path={page.path} key={page.path}>
								<Layout>{page.component}</Layout>
							</Route>
						) : (
							<Redirect
								key={page.path}
								to={{
									pathname: '/login',
								}}
							/>
						)
				)}
			</Switch>
		</Router>
	);
};

export default Routes;
