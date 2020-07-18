import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import NameField from './NameField';
import PasswordField from './PasswordField';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useFeathers } from '../../hooks/useFeathers';
import { User } from '../../../../shared/src/User';

export interface LoginFormProps {
	type: 'login' | 'signup';
}

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
	})
);

interface InputProp {
	name: string;
	password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ type = 'login' }) => {
	const { t } = useTranslation();
	const [ state, setState ] = useState<{ name: string; password: string } | null>(null);
	const [ passed, setPassed ] = useState(true);
	const [ data, error ] = useFeathers<User>({
		service: 'users',
		method: type === 'login' ? 'get' : 'create',
		data: state,
	});
	const [ inputs, setInputs ] = useState<InputProp>({
		name: '',
		password: '',
	});
	const classes = useStyles();

	useEffect(
		() => {
			if (inputs.name !== '' && inputs.password !== '') {
				setPassed(true);
			} else {
				setPassed(false);
			}
		},
		[ inputs ]
	);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setState(inputs);
	};

	return (
		<form onSubmit={handleSubmit}>
			<NameField inputs={inputs} setter={setInputs} />
			<PasswordField inputs={inputs} setter={setInputs} />
			<Button
				variant="contained"
				startIcon={passed ? <CheckIcon /> : <CloseIcon />}
				fullWidth
				className={passed ? classes.filled : classes.notFilled}
				disabled={!passed}
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
