import { User } from '@chat-app/shared';
import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';

import { initValue } from '../context/UserContext';
import { app } from '../feathersClient';

interface JWTObj {
  aud: string;
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  sub: string;
}

interface StateInterface {
  token: string;
  user: User;
}

export const useReauthentication = (): [
  string, User, boolean
] => {
  const [loading, setLoading] = useState<boolean>(true);
  const [state, setState] = useState<StateInterface>({
    token: "",
    user: initValue.user,
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("feathers-jwt");
    if(storedToken) {
      const resolved = jwt_decode<JWTObj>(storedToken);
      const exp = resolved.exp * 1000;

      if(exp < new Date().getTime()) {
        // if token has expired, set loading to false
        // and clea localStorage
        setLoading(false);
        localStorage.removeItem("feathers-jwt");
      } else {
        // if token hasent expired, reauthenticate
        app.reAuthenticate()
          .then(response => {
            setLoading(false);
            setState({
              token: response.accessToken,
              user: response.user
            });
          })
          .catch(err => {
            setLoading(false);
            console.log(err);
          })
      }
    } else {
      setLoading(false);
    }
  }, []);

  return [state.token, state.user, loading];
}