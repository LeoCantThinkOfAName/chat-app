import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import FingerPrint from '@material-ui/icons/Fingerprint';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useStyles } from '.';
import { FieldProps } from './Props';

const PasswordField: React.FC<FieldProps> = ({ inputs, setter, validate, type }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const [ show, setShow ] = useState(false);
	const [ touched, setTouched ] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setter({ ...inputs, password: e.target.value });
	};

	const handleClick = () => {
		setShow(!show);
	};

	useEffect(
		() => {
			if (type === 'signup' && !touched && inputs.password !== '') {
				setTouched(true);
			}
		},
		[ inputs, touched, type ]
	);

	return (
		<TextField
			id="login-password"
			label="Password"
			name="password"
			autoComplete="off"
			error={type === 'signup' && touched && validate[0] ? true : false}
			helperText={touched && validate[0] ? t(validate[0].message) : ''}
			fullWidth
			className={classes.input}
			type={show ? 'text' : 'password'}
			value={inputs.password}
			onChange={handleChange}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<FingerPrint />
					</InputAdornment>
				),
				endAdornment: (
					<InputAdornment position="end">
						<IconButton aria-label="toggle password visibility" onClick={handleClick}>
							{show ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
};

export default PasswordField;
