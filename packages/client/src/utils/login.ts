import { LoginState } from '../context/LoginContext';

const userEndpoint = process.env.REACT_APP_USER_ENDPOINT as string;
const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT as string;

export const login = (data: LoginState) => {
	const newUser = fetch(userEndpoint, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'content-type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((response) => response);

	if (newUser) {
		fetch(authEndpoint, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((response) => console.log(response));
	}
};
