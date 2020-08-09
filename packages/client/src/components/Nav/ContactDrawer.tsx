import Hidden from '@material-ui/core/Hidden';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { combinedData } from '../../assets/dev/fakeChatContact';
import { fakeContacts } from '../../assets/dev/fakeUserData';
import { SearchContacts } from '../AutoCompletes';
import { ChatContact, ProfileContact } from '../Contact';
import BaseDrawer from './BaseDrawer';

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
				<SearchContacts type={notChat ? 'profile' : 'chat'} />
			</Hidden>
			{notChat ? (
				<ProfileContact />
			) : (
				combinedData.map((contact) => <ChatContact key={contact.chatRoomId} contact={contact} />)
			)}
		</BaseDrawer>
	);
};

export default ContactDrawer;
