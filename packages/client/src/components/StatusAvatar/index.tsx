import Avatar from '@material-ui/core/Avatar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import Box from '@material-ui/core/Box';

interface Props {
	name: string;
	thumbnail?: string | null;
	status?: 'online' | 'offline' | 'afk' | null;
	ref?: React.MutableRefObject<any>;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		wrapper: {
			padding: '5px',
			borderRadius: '50%',
			position: 'relative',
		},
		status: {
			'&::after': {
				top: 0,
				left: 0,
				content: "''",
				display: 'block',
				position: 'absolute',
				height: '100%',
				width: '100%',
				borderStyle: 'solid',
				borderWidth: 3,
				borderRadius: '50%',
			},
		},
		online: {
			'&::after': {
				borderColor: theme.palette.userStatus.online,
			},
		},
		offline: {
			'&::after': {
				borderColor: theme.palette.userStatus.offline,
			},
		},
		afk: {
			'&::after': {
				borderColor: theme.palette.userStatus.afk,
			},
		},
	})
);

const StatusAvatar: React.FC<Props> = ({ name, thumbnail, status }) => {
	const classes = useStyles();

	return (
		<Box className={clsx(classes.wrapper, status && classes.status, status && classes[status])}>
			<Avatar alt={name} src={thumbnail ? thumbnail : undefined}>
				{name && name[0]}
			</Avatar>
		</Box>
	);
};

export default StatusAvatar;
