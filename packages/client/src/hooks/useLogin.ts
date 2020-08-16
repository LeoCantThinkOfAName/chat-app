import { User } from '@chat-app/shared/dist/User';
import { app } from '../feathersClient';
import { useState, useEffect, Dispatch, SetStateAction, useRef } from 'react';

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
	const _isMounted = useRef(true);
	const [ data, setData ] = useState<Response | null>(null);
	const [ loading, setLoading ] = useState<boolean>(false);
	const [ error, setError ] = useState<any>(null);
	const [ login, setLogin ] = useState<LoginObj>({ email: '', password: '', strategy: 'local' });

	useEffect(() => {
		return () => {
			_isMounted.current = false;
		};
	}, []);

	useEffect(
		() => {
			if (login.email !== '' && _isMounted.current && loading === false) {
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
		[ login, loading ]
	);

	return [ { data, loading, error }, setLogin ];
};
