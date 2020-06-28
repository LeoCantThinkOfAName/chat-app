import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import ElevationScroll from './ElevationScroll';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

import logo from '../../assets/chatter.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const status = {
	lg: {
		contact: true,
	},
	sm: {
		contact: false,
	},
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
		},
		toolbar: {
			...theme.mixins.flexCenter,
			flexDirection: 'row',
		},
		main: {
			alignItems: 'center',
			display: 'flex',
			flex: 1,
		},
		logo: {
			maxWidth: theme.spacing(5),
		},
		link: {
			...theme.mixins.flexCenter,
			color: 'inherit',
			height: '100%',
			width: '100%',
			textDecoration: 'none',
		},
	})
);

const Header: React.FC = () => {
	const classes = useStyles();
	const { t } = useTranslation();

	return (
		<React.Fragment>
			<CssBaseline />
			<ElevationScroll>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar className={classes.toolbar}>
						<div className={classes.main}>
							<img src={logo} className={classes.logo} alt="chatter" title={t('general.title')} />
						</div>
						<Avatar alt="user">
							<Link to="/profile" className={classes.link}>
								U
							</Link>
						</Avatar>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
		</React.Fragment>
	);
};

export default Header;
