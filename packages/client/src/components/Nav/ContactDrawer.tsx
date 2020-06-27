import Hidden from '@material-ui/core/Hidden';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { ChatContact, ProfileContact } from '../Contact';
import Search from '../Search';
import BaseDrawer from './BaseDrawer';
import { fakeContacts } from '../../assets/dev/fakeUserData';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		contactDrawer: {
			display: 'block',
			flexShrink: 0,
			overflowX: 'hidden',
			whiteSpace: 'nowrap',
			width: theme.spacing(9) + 1,
			'& > div': {
				position: 'relative',
			},
			[theme.breakpoints.up('md')]: {
				width: theme.spacing(36) + 1,
			},
		},
	})
);

const ContactDrawer = () => {
	const classes = useStyles();
	const matchChats = useRouteMatch('/chat');
	const matchChat = useRouteMatch('/chat/:id');
	const notChat = !matchChat && !matchChats;

	return (
		<BaseDrawer className={classes.contactDrawer}>
			<Hidden smDown implementation="js">
				<Search type={notChat ? "profile" : "chat"} />
			</Hidden>
			{fakeContacts.map((contact) => {
				if (notChat) {
					return <ProfileContact key={contact.id} contact={contact} />;
				} else {
					return <ChatContact key={contact.id} contact={contact} />;
				}
			})}
		</BaseDrawer>
	);
};

export default ContactDrawer;
