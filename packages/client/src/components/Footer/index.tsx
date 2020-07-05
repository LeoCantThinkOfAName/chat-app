import AppBar from '@material-ui/core/AppBar';
import ButtonBase from '@material-ui/core/ButtonBase';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

import { Pages } from '../../Pages';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: {
			top: 'auto',
			bottom: 0,
			display: 'flex',
			[theme.breakpoints.up('sm')]: {
				display: 'none',
			},
		},
		toolbar: {
			padding: 0,
			display: 'flex',
		},
		button: {
			alignSelf: 'stretch',
			justifySelf: 'stretch',
			display: 'flex',
			flex: 1,
			flexDirection: 'column',
		},
		link: {
			alignSelf: 'stretch',
			color: 'inherit',
			display: 'flex',
			flex: 1,
			justifyContent: 'center',
			textDecoration: 'none',
		},
	})
);

const Footer = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<AppBar position="fixed" color="primary" className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					{Pages.map((page) => {
						if (page.main) {
							return (
								<Link to={page.path} className={classes.link} key={page.path}>
									<ButtonBase className={classes.button}>
										{page.icon}
										<Typography component="p" variant="subtitle2">
											{page.name}
										</Typography>
									</ButtonBase>
								</Link>
							);
						} else {
							return null;
						}
					})}
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
};

export default Footer;
