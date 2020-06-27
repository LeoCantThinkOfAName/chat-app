import React from 'react';
import { User } from '@chat-app/shared';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import BaseContact from './BaseContact';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
	contact: User;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		badge: {
			alignItems: 'center',
			display: 'flex',
			position: 'static',
		},
		circle: {
			top: 0,
			right: 0,
			transform: 'scale(1)',
			transformOrigin: '50% 50%',
			position: 'static',
			marginLeft: theme.spacing(1),
		},
	})
);

const ChatContact: React.FC<Props> = ({ contact }) => {
	const classes = useStyles();

	return (
		<BaseContact contact={contact} link={`/chat/${contact.id}`}>
			<Badge
				overlap="circle"
				badgeContent={contact.unreads && contact.unreads}
				color="error"
				classes={{
					root: classes.badge,
					anchorOriginTopRightCircle: classes.circle,
				}}
			>
				<Typography component="p">{contact.name}</Typography>
			</Badge>
			<Typography component="p" variant="caption" color="textSecondary">
				Last message
			</Typography>
		</BaseContact>
	);
};

export default ChatContact;
