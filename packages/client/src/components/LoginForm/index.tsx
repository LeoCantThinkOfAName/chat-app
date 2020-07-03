import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { LoginContext } from "../../context/LoginContext";
import NameField from "./NameField";
import PasswordField from "./PasswordField";

export interface LoginFormProps {
  type: "login" | "signup";
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      marginBottom: theme.spacing(2.5),
    },
    filled: {
      backgroundColor: theme.palette.success.main,
    },
    notFilled: {
      backgroundColor: "red",
    },
  })
);

const LoginForm: React.FC<LoginFormProps> = ({ type = "login" }) => {
  const { t } = useTranslation();
  const [passed, setPassed] = useState(false);
  const { loginState, signupState } = useContext(LoginContext);
  const classes = useStyles();

  useEffect(() => {
    if (type === "login") {
      setPassed(loginState.name !== "" && loginState.password !== "");
    } else {
      setPassed(signupState.name !== "" && signupState.password !== "");
    }
  }, [type, loginState, signupState]);

  return (
    <form>
      <NameField type={type} />
      <PasswordField type={type} />
      <Button
        variant="contained"
        startIcon={passed ? <CheckIcon /> : <CloseIcon />}
        fullWidth
        className={passed ? classes.filled : classes.notFilled}
        disabled={!passed}
      >
        {t(`general.ui.button.login.${type}`)}
      </Button>
      <Box mb={1.5} />
    </form>
  );
};

export default LoginForm;
