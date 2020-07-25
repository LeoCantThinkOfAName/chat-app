import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useStyles } from '.';
import { FieldProps } from './Props';

const NameField: React.FC<FieldProps> = ({ inputs, setter, validate, type }) => {
	const {t} = useTranslation();
	const classes = useStyles();
	const [ touched, setTouched ] = useState(false);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setter({ ...inputs, name: e.target.value });
	};

	useEffect(
		() => {
			if (type === 'signup' && !touched && inputs.name !== '') {
				setTouched(true);
				console.log(touched);
			}
		},
		[ inputs, touched, type ]
	);

	return (
		<TextField
			id="login-username"
			label="User Name"
			name="name"
			fullWidth
			error={type === 'signup' && touched && validate[0] ? true : false}
			helperText={touched && validate[0] ? t(validate[0].message) : ''}
			className={classes.input}
			value={inputs.name}
			onChange={handleChange}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<AccountCircle />
					</InputAdornment>
				),
			}}
		/>
	);
};

export default NameField;
