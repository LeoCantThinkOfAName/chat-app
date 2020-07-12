import { LoginState } from '../context/LoginContext';

const userEndpoint = process.env.REACT_APP_USER_ENDPOINT as string;
const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT as string;

export const signup = async (data: LoginState) => {
	const newUser = await fetch(userEndpoint, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'content-type': 'application/json',
		},
	})
    .then((response) => response.json())
    .then((response) => response)

  console.log(newUser);

  if (newUser) {
    
  }
};
