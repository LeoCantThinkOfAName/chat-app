import React, { useContext } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import { UserContext } from './context/UserContext';
import { PagesProps } from './Pages';
import Login from './pages/Login';

interface Props {
	routes: PagesProps[];
}

interface ProtectedProps {
	page: PagesProps;
}

const ProtectedRoute: React.FC<ProtectedProps> = ({ page }) => {
	const { token } = useContext(UserContext);

	return (
		token === "" ? (
			<Redirect to="/login" />
		) : (
			<Route exact path={page.path}>
				<Layout>{page.component}</Layout>
			</Route>
		)
	)
}

const Routes: React.FC<Props> = ({ routes }) => {
	return (
		<Router>
			<Switch>
				<Route exact path="/login">
					<Login />
				</Route>
				{routes.map((page) => <ProtectedRoute key={page.path} page={page} />)}
			</Switch>
		</Router>
	);
};

export default Routes;
