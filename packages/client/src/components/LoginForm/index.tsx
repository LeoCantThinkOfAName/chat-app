import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";
import FingerPrint from "@material-ui/icons/Fingerprint";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "@material-ui/core/Box";
import CheckIcon from "@material-ui/icons/Check";

interface LoginFormProps {
  type: "login" | "signup";
}

const useStyles = makeStyles((theme: Theme) =>
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
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    name: "asd",
    password: "asd",
  });
  const filled = data.name !== "" && data.password !== "";

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <form>
      <TextField
        id="login-username"
        label="User Name"
        name="name"
        fullWidth
        className={classes.input}
        value={data.name}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="login-password"
        label="Password"
        name="password"
        autoComplete="off"
        fullWidth
        className={classes.input}
        type={show ? "text" : "password"}
        value={data.password}
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
      <Button
        variant="contained"
        startIcon={filled ? <CheckIcon /> : <CloseIcon />}
        fullWidth
        className={filled ? classes.filled : classes.notFilled}
        disabled={!filled}
      >
        {t(`general.ui.button.login.${type}`)}
      </Button>
      <Box mb={1.5} />
    </form>
  );
};

export default LoginForm;
