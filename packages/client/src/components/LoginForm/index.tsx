import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { object as yupObject, string, ValidationError } from 'yup';

import { User } from '../../../../shared/src/User';
import { UserContext } from '../../context/UserContext';
import { useLogin, useRest, useValidator } from '../../hooks';
import EmailField from './EmailField';
import PasswordField from './PasswordField';
import { InputProp, LoginFormProps } from './Props';

const schema = yupObject().shape({
	email: string().email().required(),
	password: string().required().min(5),
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
		},
	})
);

const LoginForm: React.FC<LoginFormProps> = ({ type = 'login' }) => {
	const classes = useStyles();
	const inter = useRef<any>(null);
	const _isMounted = useRef(true);
	const { t } = useTranslation();
	const [ fetchData, setRequest ] = useRest<User>();
	const [ inputs, setInputs ] = useState<InputProp>({
		email: '',
		password: '',
	});
	const [ validate, setValidateConfig ] = useValidator();
	const { setUser, setToken } = useContext(UserContext);
	const [ loginData, setLogin ] = useLogin();
	const history = useHistory();

	useEffect(() => {
		return () => {
			_isMounted.current = false;
		};
	}, []);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!loginData.loading && !fetchData.loading && _isMounted.current) {
			const { email, password } = inputs;
			if (type === 'login') {
				setLogin({ email, password, strategy: 'local' });
			} else {
				setRequest({
					service: 'users',
					method: 'create',
					data: { email, password },
				});
			}
		}
	};

	useEffect(
		// effect hook for validation
		() => {
			clearTimeout(inter.current);

			if (_isMounted.current) {
				console.log('do things 1');
				inter.current = setTimeout(() => {
					setValidateConfig({ schema, obj: inputs });
				}, 500);
			}

			return () => {
				clearTimeout(inter.current);
			};
		},
		[ inputs, setValidateConfig ]
	);

	useEffect(
		() => {
			const { data } = fetchData;
			if (data && data.id && _isMounted.current) {
				console.log('do things 2');
				const { email, password } = inputs;
				setLogin({ email, password, strategy: 'local' });
			}
		},
		[ fetchData, setLogin, inputs ]
	);

	useEffect(
		() => {
			const { data } = loginData;
			if (data && data.token && _isMounted.current) {
				console.log('do things 3');
				setToken(data.token);
				setUser(data.user);
			}
		},
		[ loginData, setUser, setToken, history ]
	);

	const assignValidate = (key: string): ValidationError[] => {
		return validate.filter((obj) => obj.path === key);
	};

	return (
		<form onSubmit={handleSubmit}>
			{fetchData.error && (
				<Typography className={classes.warn}>
					{t(`general.helperText.${fetchData.error.errors[0].message.split(' ').join('_')}`)}
				</Typography>
			)}
			<EmailField inputs={inputs} setter={setInputs} validate={assignValidate('email')} type={type} />
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
