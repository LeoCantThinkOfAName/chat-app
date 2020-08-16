import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import LinkIcon from '@material-ui/icons/Link';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Props } from '.';
import { User } from '../../../../shared/src/User';
import { UserContext } from '../../context/UserContext';
import { useRest } from '../../hooks/useRest';
import Modal from './Modal';

const UploadModal: React.FC<Props> = ({ open, closeHandler }) => {
	const { t } = useTranslation();
	const [ { data, loading, error }, setRequest ] = useRest<User>();
	const [ url, setUrl ] = useState('');
	const { user, setUser } = useContext(UserContext);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setRequest({
			service: 'users',
			method: 'patch',
			data: {
				thumbnail: url,
			},
			id: user.id,
		});
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value);
	};

	useEffect(
		() => {
			if (data && data.thumbnail !== user.thumbnail) {
				closeHandler();
				setUser({ ...user, thumbnail: url });
			} else if (error) {
				console.log(error);
			} else {
				return;
			}
		},
		[ data, error, user, url, setUser, closeHandler ]
	);

	return (
		<Modal open={open} closeHandler={closeHandler}>
			<form onSubmit={handleSubmit}>
				<InputLabel htmlFor="image-url">Paste Image Url:</InputLabel>
				<Input
					id="image-url"
					onChange={handleChange}
					fullWidth
					disabled={loading}
					startAdornment={
						<InputAdornment position="start">
							{loading ? <CircularProgress size="1.5rem" /> : <LinkIcon />}
						</InputAdornment>
					}
				/>
			</form>
		</Modal>
	);
};

export default UploadModal;
