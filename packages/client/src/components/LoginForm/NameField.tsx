import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React, { useContext } from "react";

import { LoginContext } from "../../context/LoginContext";
import { LoginFormProps, useStyles } from "./index";

const NameField: React.FC<LoginFormProps> = ({ type }) => {
  const classes = useStyles();
  const { loginState, signupState, dispatchLogin, dispatchSignup } = useContext(
    LoginContext
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "login") {
      dispatchLogin({ type: "name", payload: e.target.value });
    } else {
      dispatchSignup({ type: "name", payload: e.target.value });
    }
  };

  return (
    <TextField
      id="login-username"
      label="User Name"
      name="name"
      fullWidth
      error={false}
      helperText={"The User name has been in used"}
      className={classes.input}
      value={type === "login" ? loginState.name : signupState.name}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default NameField;
