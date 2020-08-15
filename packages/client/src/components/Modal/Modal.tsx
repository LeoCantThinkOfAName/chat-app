import React from 'react';
import MaterialModal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Props } from './index';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			...theme.mixins.flexCenter,
		},
		wrapper: {
			backgroundColor: theme.palette.background.default,
			padding: theme.spacing(1.5),
			maxWidth: '800px',
			width: '90%',
			margin: '0 auto',
			position: 'relative',
		},
		closeButton: {
			position: 'absolute',
			top: theme.spacing(0.5),
			right: theme.spacing(0.5),
		},
	})
);

const Modal: React.FC<Props> = ({ open, closeHandler, children }) => {
	const classes = useStyles();

	const handleClose = () => {
		closeHandler();
	};

	return (
		<MaterialModal open={open} className={classes.root} onClose={handleClose}>
			<Box className={classes.wrapper}>
				<IconButton size="small" onClick={handleClose} className={classes.closeButton}>
					<CloseIcon />
				</IconButton>
				{children}
			</Box>
		</MaterialModal>
	);
};

export default Modal;
