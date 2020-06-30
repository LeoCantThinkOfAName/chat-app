import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import logo from "../../assets/chatter.png";
import ElevationScroll from "./ElevationScroll";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: {
      ...theme.mixins.flexCenter,
      flexDirection: "row",
    },
    main: {
      alignItems: "center",
      display: "flex",
      flex: 1,
    },
    logo: {
      maxWidth: theme.spacing(5),
    },
    link: {
      ...theme.mixins.flexCenter,
      color: "inherit",
      height: "100%",
      width: "100%",
      textDecoration: "none",
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const appTitle = t("general.title.app");

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.main}>
              <img
                src={logo}
                className={classes.logo}
                alt={appTitle}
                title={appTitle}
              />
            </div>
            <Avatar alt="user">
              <Link to="/profile" className={classes.link}>
                U
              </Link>
            </Avatar>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};

export default Header;
