import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		wrapper: {
      background: theme.palette.primary.main,
      height: "100%",
      color: theme.palette.common.white,
      ...theme.mixins.flexCenter
    },
    box: {
      ...theme.mixins.flexCenter,
      flexDirection: "column",
    },
    logo: {
      fontSize: "5rem",
      animation: `$intro 500ms ${theme.transitions.easing.easeInOut}`,
    },
    "@keyframes intro": {
      "0%": {
        transform: "scale(0.1)"
      },
      "70%": {
        transform: "scale(1.1)"
      },
      "100%": {
        transform: "scale(1)"
      }
    }
	})
);

const Loading: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.box}>
        <Typography className={classes.logo}>
          Logo
        </Typography>
        <CircularProgress color="inherit"/>
      </Box>
    </Box>
  )
};

export default Loading;