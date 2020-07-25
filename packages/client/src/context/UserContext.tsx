import React, { useState } from "react";
import { User } from '../../../shared/dist/User';

export interface UserState {
  user: User | null;
  token: string | null; 
}

export interface UserSetState {
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export type UserContextType = UserState & UserSetState;

export const UserContext = React.createContext<UserContextType>({
  user: null,
  token: null,
  setUser: (state) => state,
  setToken: (state) => state
});

export const initValue: UserState = {
  user: null,
  token: null
}

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
