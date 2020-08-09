import { Friend } from '@chat-app/shared';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';

import { useRest } from '../../hooks/useRest';
import BaseContact from './BaseContact';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';

interface Prop {
	contact: Friend;
}

const Contact: React.FC<Prop> = ({ contact }) => {
	return (
		<BaseContact
			contact={{
				name: contact['user.name'],
				thumbnail: contact['user.thumbnail'],
				status: contact['user.status'],
			}}
			link={`/profile/${contact.friend_id}`}
		>
			<Typography component="p">{contact['user.name']}</Typography>
			<Typography component="p" variant="caption" color="textSecondary">
				{contact['user.description']}
			</Typography>
		</BaseContact>
	);
};

const ProfileContact: React.FC = () => {
	const { t } = useTranslation();
	const [ { loading, data, error }, setRequest ] = useRest<Friend[]>();

	useEffect(() => {
		setRequest({
			method: 'find',
			service: 'friends',
			query: {
				user_id: 1,
			},
		});
	}, []);

	if (loading) {
		return (
			<Box textAlign="center">
				<CircularProgress size="2rem" />
			</Box>
		);
	} else if (error) {
		return <Typography>{t('general.errors.errorOccured')}</Typography>;
	} else if (data) {
		return (
			<React.Fragment>
				{data.map((contact) => <Contact key={contact.friend_id} contact={contact} />)}
			</React.Fragment>
		);
	} else {
		return <Typography>{t('general.errors.errorOccured')}</Typography>;
	}
};

export default ProfileContact;
