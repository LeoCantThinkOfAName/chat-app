import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { object as yupObject, string, ValidationError } from 'yup';

import { User } from '../../../../shared/src/User';
import { UserContext } from '../../context/UserContext';
import { useFeathers } from '../../hooks/useFeathers';
import { useValidator } from '../../hooks/useValidator';
import NameField from './NameField';
import PasswordField from './PasswordField';
import { InputProp, LoginFormProps } from './Props';
import { authentication } from '../../utils/autnetication';

const schema = yupObject().shape({
	name: string().required().min(3),
	password: string().required().min(6),
});

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		input: {
			marginBottom: theme.spacing(2.5),
		},
		filled: {
			backgroundColor: theme.palette.success.main,
		},
		notFilled: {
			backgroundColor: 'red',
		},
		button: {
			marginBottom: theme.spacing(1.5),
		},
		warn: {
			color: theme.palette.error.main,
			marginBottom: theme.spacing(1),
		}
	})
);

const LoginForm: React.FC<LoginFormProps> = ({ type = 'login' }) => {
	const { t } = useTranslation();
	const [ state, setState ] = useState<{ name: string; password: string } | null>(null);
	const [ data, error ] = useFeathers<User>({
		service: 'users',
		method: 'create',
		data: state,
	});
	const [ inputs, setInputs ] = useState<InputProp>({
		name: '',
		password: '',
	});
	const validate = useValidator({ schema, obj: inputs });
	const {token, setUser, setToken} = useContext(UserContext);
	const classes = useStyles();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(type === "login") {
			const data = authentication({name: inputs.name, password: inputs.password});
			console.log(data);
		} else {
			setState(inputs);
		}
	};

	useEffect(() => {
		console.log("data changed");
	}, [data]);

	useEffect(() => {
		console.log("token changed");
	}, [token]);

	const assignValidate = (key: string): ValidationError[] => {
		return validate.filter((obj) => obj.path === key);
	};

	return (
		<form onSubmit={handleSubmit}>
			{
				error && (
					<Typography className={classes.warn}>
						{t(`general.helperText.${error.errors[0].message.split(" ").join("_")}`)}
					</Typography>
				)
			}
			<NameField inputs={inputs} setter={setInputs} validate={assignValidate('name')} type={type} />
			<PasswordField inputs={inputs} setter={setInputs} validate={assignValidate('password')} type={type} />
			<Button
				variant="contained"
				startIcon={validate.length !== 0 ? <CloseIcon /> : <CheckIcon />}
				fullWidth
				className={validate.length !== 0 ? classes.notFilled : classes.filled}
				disabled={validate.length !== 0}
				type="submit"
			>
				{t(`general.ui.button.${type}.main`)}
			</Button>
			<Box my={1.5} />
			<Button className={classes.button} variant="contained" startIcon={<FacebookIcon />} fullWidth>
				{t(`general.ui.button.${type}.facebook`)}
			</Button>
			<Button className={classes.button} variant="contained" startIcon={<GitHubIcon />} fullWidth>
				{t(`general.ui.button.${type}.github`)}
			</Button>
			<Box />
		</form>
	);
};

export default LoginForm;
