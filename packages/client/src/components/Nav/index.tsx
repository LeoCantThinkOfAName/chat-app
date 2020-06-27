import React from 'react'
import AppDrawer from './AppDrawer';
import ContactDrawer from './ContactDrawer';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        height: "100vh",
        minWidth: theme.spacing(18) + 2,
      },
      [theme.breakpoints.up("md")]: {
        minWidth: theme.spacing(45) + 2,
      }
    },
    containerShrink: {
    },
    wrapper: {
      display: "flex",
      height: "100%",
      position: "fixed",
    }
  }),
);


const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hidden xsDown implementation="js">
          <AppDrawer/>
        </Hidden>
        <Hidden xsDown implementation="js">
          <ContactDrawer/>
        </Hidden>
      </div>
    </div>
  )
}

export default Nav
