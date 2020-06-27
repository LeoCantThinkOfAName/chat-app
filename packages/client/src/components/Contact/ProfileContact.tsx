import React from 'react';
import BaseContact from './BaseContact';
import Typography from '@material-ui/core/Typography';
import { User } from '@chat-app/shared';

interface Props {
	contact: User;
}

const ProfileContact: React.FC<Props> = ({ contact }) => {
	return (
		<BaseContact contact={contact} link={`/profile/${contact.id}`}>
			<Typography component="p">{contact.name}</Typography>
			<Typography component="p" variant="caption" color="textSecondary">
				{contact.description}
			</Typography>
		</BaseContact>
	);
};

export default ProfileContact;
