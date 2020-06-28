import { User } from '@chat-app/shared';
import Avatar from '@material-ui/core/Avatar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	contact: User;
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

const Option: React.FC<Props> = ({ contact, link }) => {
	const classes = useStyles();

	return (
		<Link to={link} className={classes.root}>
			<Avatar alt={contact.name} className={classes.avatar}>
				{contact.name[0]}
			</Avatar>
			<Typography component="p">{contact.name}</Typography>
		</Link>
	);
};

export default Option;
