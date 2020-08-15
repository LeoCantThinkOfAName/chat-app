import { Friend } from '@chat-app/shared';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';

import { UserContext } from '../../context/UserContext';
import { SWRKey } from '../../SWRKeys';
import { fetcher } from '../../utils/fetcher';
import BaseContact from './BaseContact';

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
	const { user } = useContext(UserContext);
	// const [ { loading, data, error }, setRequest ] = useRest<Friend[]>();
	const { data, error } = useSWR(SWRKey.Friends, async () =>
		fetcher<Friend[]>({
			service: SWRKey.Friends,
			query: {
				user_id: user.id,
			},
			method: 'find',
		})
	);

	if (!data) {
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
				{data && data.map((contact) => <Contact contact={contact} key={contact.user_id} />)}
			</React.Fragment>
		);
	} else {
		return <Typography>{t('general.errors.errorOccured')}</Typography>;
	}
};

export default ProfileContact;
