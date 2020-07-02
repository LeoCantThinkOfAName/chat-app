import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ForumIcon from "@material-ui/icons/Forum";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifySelf: "stretch",
      maxHeight: "100%",
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    main: {
      ...theme.mixins.flexCenter,
      flexDirection: "column",
      backgroundColor: theme.palette.grey[200],
      backgroundSize: "cover",
      backgroundPosition: "center",
      flex: 1,
      position: "relative",
      color: "#fff",
    },
    mask: {
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))",
      height: "100%",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
    content: {
      ...theme.mixins.flexCenter,
      position: "relative",
      flexDirection: "column",
    },
    avatar: {
      height: "50vw",
      width: "50vw",
      [theme.breakpoints.up("sm")]: {
        height: "25vw",
        width: "25vw",
        maxHeight: "400px",
        maxWidth: "400px",
      },
    },
    name: {
      marginTop: theme.spacing(1.5),
    },
    caption: {
      color: theme.palette.grey[400],
    },
    button: {
      ...theme.mixins.toolbar,
      background: theme.palette.success.dark,
      "&:hover": {
        background: theme.palette.success.dark,
        opacity: 0.8,
      },
    },
    link: {
      ...theme.mixins.flexCenter,
      ...theme.typography.h6,
      flex: 1,
      color: theme.palette.common.white,
      textDecoration: "none",
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);

const Profile = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <div
        className={classes.main}
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1533683083439-1a776a5653cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)`,
        }}
      >
        <div className={classes.mask} />
        <div className={classes.content}>
          <Avatar variant="square" className={classes.avatar}>
            U
          </Avatar>
          <Typography component="h3" variant="h5" className={classes.name}>
            User Name
          </Typography>
          <Typography
            component="p"
            variant="subtitle2"
            className={classes.caption}
          >
            user description
          </Typography>
        </div>
      </div>
      {id && (
        <MenuItem className={classes.button}>
          <Link to={`/chat/${id}`} className={classes.link}>
            <ForumIcon className={classes.icon} />
            {t("general.ui.button.startChattingWith")}
            {id}
          </Link>
        </MenuItem>
      )}
    </div>
  );
};

export default Profile;
