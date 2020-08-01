import React, { useState, useEffect } from "react";
import { User } from '../../../shared/dist/User';
import { useReauthentication } from '../hooks';


export interface UserState {
  user: User;
  token: string;
  loading: boolean;
}

export interface UserSetState {
  setUser: React.Dispatch<React.SetStateAction<User>>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

export type UserContextType = UserState & UserSetState;

export const initValue: UserState = {
  user: {
    id: 0,
    name: "",
    status: "offline",
    description: "",
    thumbnail: null,
    background: null,
    githubId: null,
    facebookId: null,
    password: "",
    createdAt: "",
    updatedAt: "",
  },
  token: "",
  loading: true,
}

export const UserContext = React.createContext<UserContextType>({
  user: initValue.user,
  token: initValue.token,
  loading: initValue.loading,
  setUser: (state) => state,
  setToken: (state) => state,
});

export const UserProvider: React.FC = ({ children }) => {
  const [getToken, getUser, loading] = useReauthentication();
  const [user, setUser] = useState<User>(initValue.user);
  const [token, setToken] = useState<string>(initValue.token);

  useEffect(() => {
    if(getToken !== "" && getUser.id !== 0) {
      setUser(getUser);
      setToken(getToken);
    }
  }, [getToken, getUser]);

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
