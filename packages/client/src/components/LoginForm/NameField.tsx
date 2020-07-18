import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React from 'react';

interface Prop {
	inputs: { name: string; password: string };
	setter: React.Dispatch<React.SetStateAction<{ name: string; password: string }>>;
}

const NameField: React.FC<Prop> = ({ inputs, setter }) => {
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
			helperText={'The User name has been in used'}
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
