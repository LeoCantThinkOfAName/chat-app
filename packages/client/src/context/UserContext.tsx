import React, { useState, useEffect } from "react";
import { User } from '../../../shared/dist/User';
import { useReauthentication } from '../hooks';


export interface UserState {
  user: User | null;
  token: string | null;
  loading: boolean;
}

export interface UserSetState {
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export type UserContextType = UserState & UserSetState;

export const UserContext = React.createContext<UserContextType>({
  user: null,
  token: null,
  loading: true,
  setUser: (state) => state,
  setToken: (state) => state,
});

export const initValue: UserState = {
  user: null,
  token: null,
  loading: true,
}

export const UserProvider: React.FC = ({ children }) => {
  const [getToken, getUser, loading] = useReauthentication();
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if(getToken !== null && getUser !== null) {
      setUser(getUser);
      setToken(getToken)
    }
  }, [getToken, getUser]);

  console.log(user, token, loading);

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        loading,
        setUser,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
