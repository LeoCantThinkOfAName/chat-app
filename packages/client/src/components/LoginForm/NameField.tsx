import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React from 'react';
import { ValidationError } from 'yup';

interface Prop {
	inputs: { name: string; password: string };
	setter: React.Dispatch<React.SetStateAction<{ name: string; password: string }>>;
	validate: ValidationError[];
}

const NameField: React.FC<Prop> = ({ inputs, setter, validate }) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setter({ ...inputs, name: e.target.value });
	};

	return (
		<TextField
			id="login-username"
			label="User Name"
			name="name"
			fullWidth
			error={false}
			helperText={validate[0] ? validate[0].message : ''}
			className={''}
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
