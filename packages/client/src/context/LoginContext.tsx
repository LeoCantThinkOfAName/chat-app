import React, { useReducer } from "react";

interface State {
  name: string;
  password: string;
}

type Action =
  | { type: "name"; payload: string }
  | { type: "password"; payload: string };

export const LoginReducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload,
      };
    case "password":
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

const initialLoginState: State = {
  name: "",
  password: "",
};

const initialSignupState: State = {
  name: "",
  password: "",
};

export const LoginContext = React.createContext({
  loginState: initialLoginState,
  signupState: initialSignupState,
  dispatchLogin: (_props: Action) => {},
  dispatchSignup: (_props: Action) => {},
});

const LoginProvider: React.FC = ({ children }) => {
  const [loginState, dispatchLogin] = useReducer(
    LoginReducer,
    initialLoginState
  );
  const [signupState, dispatchSignup] = useReducer(
    LoginReducer,
    initialLoginState
  );

  return (
    <LoginContext.Provider
      value={{
        loginState,
        signupState,
        dispatchLogin,
        dispatchSignup,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;