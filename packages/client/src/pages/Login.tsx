import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import { UserContext } from '../context/UserContext';

const Login = () => {
	const [ tab, setTab ] = useState(0);
	const { t } = useTranslation();
	const { loading, user } = useContext(UserContext);
	const history = useHistory(); 

	const handleChange = (_e: Object, value: number) => {
		setTab(value);
	};

	useEffect(() => {
		if(user) {
			history.push("/");
		}
	}, [user, history]);

	return (
		<React.Fragment>
			{
				loading ? (
					<div>loading...</div>
				) : (
					user ? null : (
						<Box p={2} height="100%" display="flex" alignItems="center" justifyContent="center">
							<Paper>
								<Box p={2} maxWidth="90vw" width="400px" textAlign="center">
									<Typography component="h3" variant="h6">
										{t('general.title.page.login')}
									</Typography>
								</Box>
								<Tabs
									aria-label="login or sign up"
									indicatorColor="primary"
									value={tab}
									onChange={handleChange}
									variant="fullWidth"
								>
									<Tab label="Login" />
									<Tab label="Sign Up" />
								</Tabs>
								<Box p={2} maxWidth="90vw" width="400px">
									<Box hidden={tab !== 0}>
										<LoginForm type="login" />
									</Box>
									<Box hidden={tab !== 1}>
										<LoginForm type="signup" />
									</Box>
								</Box>
							</Paper>
						</Box>
					)
				)
			}
		</React.Fragment>
	);
};

export default Login;
