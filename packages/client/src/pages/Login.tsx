import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import LoginForm from "../components/LoginForm";
import LoginProvider from "../context/LoginContext";

const Login = () => {
  const [tab, setTab] = useState(0);
  const { t } = useTranslation();

  const handleChange = (_e: Object, value: number) => {
    setTab(value);
  };

  return (
    <LoginProvider>
      <Box
        p={2}
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Paper>
          <Box p={2} maxWidth="90vw" width="400px" textAlign="center">
            <Typography component="h3" variant="h6">
              {t("general.title.page.login")}
            </Typography>
          </Box>
          <Tabs
            aria-label="login or sign up"
            indicatorColor="primary"
            value={tab}
            onChange={handleChange}
            variant="fullWidth"
          >
            <Tab label="Login" />
            <Tab label="Sign Up" />
          </Tabs>
          <Box p={2} maxWidth="90vw" width="400px">
            <Box hidden={tab !== 0}>
              <LoginForm type="login" />
              <Button
                variant="contained"
                startIcon={<FacebookIcon />}
                fullWidth
              >
                {t("general.ui.button.login.facebook")}
              </Button>
              <Box my={1.5} />
              <Button variant="contained" startIcon={<GitHubIcon />} fullWidth>
                {t("general.ui.button.login.github")}
              </Button>
            </Box>
            <Box hidden={tab !== 1}>
              <LoginForm type="signup" />
            </Box>
          </Box>
        </Paper>
      </Box>
    </LoginProvider>
  );
};

export default Login;
