import { User } from '@chat-app/shared/dist/User';
import {app} from '../feathersClient';

interface Props {
	name: string;
	password: string;
}

export const login = async ({ name, password }: Props) => {
	// const data = await fetch(authEndpoint, {
	// 	method: 'POST',
	// 	body: JSON.stringify({
	// 		strategy: 'local',
	// 		name,
	// 		password,
	// 	}),
	// 	headers: new Headers({
	// 		'Content-Type': 'application/json',
	// 	}),
	// })
	// 	.then((response) => response.json())
	//   .then((response: AuthResult) => response)
	const data = await app
		.authenticate({
			strategy: "local",
			name,
			password
		})
			.then(response => response)
			.catch(err => err);

	return {
		token: data.accessToken as string | undefined,
		user: data.user as User | undefined,
		error: data.message as string | undefined
	};
};
