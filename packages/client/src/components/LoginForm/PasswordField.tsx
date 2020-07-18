import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import FingerPrint from '@material-ui/icons/Fingerprint';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React, { useState } from 'react';

interface Prop {
	inputs: { name: string; password: string };
	setter: React.Dispatch<React.SetStateAction<{ name: string; password: string }>>;
}

const PasswordField: React.FC<Prop> = ({ inputs, setter }) => {
	const [ show, setShow ] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setter({ ...inputs, password: e.target.value });
	};

	const handleClick = () => {
		setShow(!show);
	};

	return (
		<TextField
			id="login-password"
			label="Password"
			name="password"
			autoComplete="off"
			error={false}
			helperText={'Password must be longer than 8 characters'}
			fullWidth
			className={''}
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
