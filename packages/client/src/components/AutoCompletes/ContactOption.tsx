import { Friend } from '@chat-app/shared';
import Avatar from '@material-ui/core/Avatar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	contact: Friend;
	link: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			alignItems: 'center',
			display: 'flex',
			padding: '10px 15px',
			height: '100%',
			width: '100%',
			textDecoration: 'none',
			color: 'inherit',
		},
		avatar: {
			height: theme.spacing(5),
			width: theme.spacing(5),
			marginRight: theme.spacing(1),
		},
	})
);

const ContactsOption: React.FC<Props> = ({ contact, link }) => {
	const classes = useStyles();

	return (
		<Link to={link} className={classes.root}>
			<Avatar
				alt={contact['user.name']}
				src={contact['user.thumbnail'] ? contact['user.thumbnail'] : undefined}
				className={classes.avatar}
			>
				{contact['user.name'][0]}
			</Avatar>
			<Typography component="p">{contact['user.name']}</Typography>
		</Link>
	);
};

export default ContactsOption;
