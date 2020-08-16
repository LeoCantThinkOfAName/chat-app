import { User } from '@chat-app/shared/dist/User';
import { app } from '../feathersClient';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

interface LoginObj {
	email: string;
	password: string;
	strategy: 'local';
}

interface Response {
	token: string;
	user: User;
}

export const useLogin = (): [
	{ data: Response | null; loading: boolean; error: any },
	Dispatch<SetStateAction<LoginObj>>
] => {
	const [ data, setData ] = useState<Response | null>(null);
	const [ loading, setLoading ] = useState<boolean>(false);
	const [ error, setError ] = useState<any>(null);
	const [ login, setLogin ] = useState<LoginObj>({ email: '', password: '', strategy: 'local' });

	useEffect(
		() => {
			if (login.email !== '') {
				setLoading(true);
				app
					.authenticate(login)
					.then((response) => {
						setData({
							token: response.accessToken as string,
							user: response.user as User,
						});
						setLoading(false);
					})
					.catch((err) => {
						setError(err);
						setLoading(false);
					});
			}
		},
		[ login ]
	);

	return [ { data, loading, error }, setLogin ];
};
