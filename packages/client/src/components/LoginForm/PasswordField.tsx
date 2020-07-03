import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import FingerPrint from "@material-ui/icons/Fingerprint";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React, { useContext, useState } from "react";

import { LoginContext } from "../../context/LoginContext";
import { LoginFormProps, useStyles } from "./index";

const PasswordField: React.FC<LoginFormProps> = ({ type }) => {
  const [show, setShow] = useState(false);
  const { loginState, signupState, dispatchLogin, dispatchSignup } = useContext(
    LoginContext
  );
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "login") {
      dispatchLogin({ type: "password", payload: e.target.value });
    } else {
      dispatchSignup({ type: "password", payload: e.target.value });
    }
  };

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <TextField
      id="login-password"
      label="Password"
      name="password"
      autoComplete="off"
      error={false}
      helperText={"Password must be longer than 8 characters"}
      fullWidth
      className={classes.input}
      type={show ? "text" : "password"}
      value={type === "login" ? loginState.password : signupState.password}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <FingerPrint />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClick}
            >
              {show ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;
