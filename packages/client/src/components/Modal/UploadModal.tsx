import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import LinkIcon from '@material-ui/icons/Link';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Props as ModalProp } from '.';
import { User } from '@chat-app/shared';
import { UserContext } from '../../context/UserContext';
import { useRest } from '../../hooks/useRest';
import Modal from './Modal';

interface Props extends ModalProp {
	target: keyof User;
}

const UploadModal: React.FC<Props> = ({ open, target, closeHandler }) => {
	const _isMounted = useRef(true);
	const { t } = useTranslation();
	const [ { data, loading, error }, setRequest ] = useRest<User>();
	const [ url, setUrl ] = useState('');
	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		return () => {
			_isMounted.current = false;
		};
	}, []);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log(target, url);

		setRequest({
			service: 'users',
			method: 'patch',
			data: {
				[target]: url,
			},
			id: user.id,
		});
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value);
	};

	useEffect(
		() => {
			if (data && url !== '' && _isMounted.current && data[target] !== user[target]) {
				closeHandler(false);
				setUser({ ...user, [target]: url });
			} else if (error) {
				console.log(error);
			} else {
				return;
			}
		},
		[ data, error, user, url, setUser, closeHandler, target ]
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
