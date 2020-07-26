import React, {useContext, useEffect} from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom';

import Layout from './components/Layout';
import { UserContext } from './context/UserContext';
import { PagesProps } from './Pages';
import Login from './pages/Login';

interface Props {
	routes: PagesProps[];
}

interface ProtectedProps {
	page: PagesProps;
	redir: boolean;
}

const ProtectedRoute: React.FC<ProtectedProps> = ({ page, redir }) => redir ? (
	<Redirect to="/login"/>
) : (
	<Route exact path={page.path}>
		<Layout>{page.component}</Layout>
	</Route>

)
const Routes: React.FC<Props> = ({ routes }) => {
	const { token } = useContext(UserContext);

	return (
		<Router>
			<Switch>
				<Route exact path="/login">
					<Login />
				</Route>
				{routes.map(
					(page) => (
						<ProtectedRoute key={page.path} page={page} redir={token === null}/>
					)
				)}
			</Switch>
		</Router>
	);
};

export default Routes;
