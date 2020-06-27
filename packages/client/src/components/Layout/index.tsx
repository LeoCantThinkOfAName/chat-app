import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import Hidden from '@material-ui/core/Hidden';

import Header from '../Header';
import Nav from '../Nav';
import Footer from '../Footer/index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: "100%"
    },
    content: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      flex: 1,
      maxHeight: "100vh",
    },
  }),
);

const Layout: React.FC = ({children}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Header/>
      <Nav/>
      <main className={classes.content}>
        <Toolbar />
        {children}
        <Hidden smUp implementation="js">
          <Toolbar />
        </Hidden>  
      </main>
      <Hidden smUp implementation="js">
        <Footer/>
      </Hidden>
    </div>
  )
}

export default Layout
