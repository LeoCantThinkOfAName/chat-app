import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';

interface DrawerProps {
	className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
		},
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
		},
		drawer: {
			flexShrink: 0,
			overflowX: 'hidden',
			whiteSpace: 'nowrap',
			width: theme.spacing(9) + 1,
			'& > div': {
				position: 'relative',
			},
		},
		drawerContainer: {
			overflow: 'hidden',
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
		button: theme.mixins.flexCenter,
		icons: {
			minWidth: 'auto',
		},
	})
);

const BaseDrawer: React.FC<DrawerProps> = ({ children, className = '' }) => {
	const classes = useStyles();

	return (
		<Drawer className={className || classes.drawer} variant="permanent">
			<Toolbar />
			<div className={classes.drawerContainer}>
				<List>{children}</List>
			</div>
		</Drawer>
	);
};

export default BaseDrawer;
