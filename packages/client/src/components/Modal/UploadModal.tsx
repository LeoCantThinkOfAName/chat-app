import React, { useState, useContext, useEffect } from 'react';
import Modal from './Modal';
import { Props } from './index';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinkIcon from '@material-ui/icons/Link';
import Input from '@material-ui/core/Input';
import { useTranslation } from 'react-i18next';
import { useRest } from '../../hooks/useRest';
import { UserContext } from '../../context/UserContext';
import CircularProgress from '@material-ui/core/CircularProgress';
import { User } from '../../../../shared/src/User';

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
