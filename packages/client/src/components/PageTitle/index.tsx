import React from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		title: {
			color: theme.palette.grey[400],
		},
		divider: {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1),
		},
	})
);

const PageTitle: React.FC = ({ children }) => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Typography component="h2" variant="h5" className={classes.title}>
				{children}
			</Typography>
			<Divider className={classes.divider} />
		</React.Fragment>
	);
};

export default PageTitle;
