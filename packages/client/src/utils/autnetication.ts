import { User } from '../../../shared/dist/User';
interface AuthResult {
  accessToken: string;
  authentication: {
    strategy: string;
  },
  user: User;
}

interface Props {
  name: string;
  password: string;
}

const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT as string;

export const authentication = async ({name, password}: Props) => {
  const data = await fetch(authEndpoint, {
    method: "POST",
    body: JSON.stringify({
      strategy: "local",
      name,
      password
    }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(response => response.json())
  .then((response: AuthResult) => response);

  return {token: data.accessToken, user: data.user};
}