import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Pages } from '../../routes';
import BaseDrawer from './BaseDrawer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    icons: {
      minWidth: "auto",
    }
  }),
);

const AppDrawer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <BaseDrawer>
      {Pages.map(page => {
        if(page.main) {
          return (
            <Link to={page.path} key={page.path}>
              <Tooltip title={t(`general.menu.${page.name}`) as string}  arrow placement="right">
                <ListItem button className={classes.button} >
                  <ListItemIcon className={classes.icons}>
                    {page.icon}
                  </ListItemIcon>
                </ListItem>
              </Tooltip>
            </Link>
          )
        }
      })}
    </BaseDrawer>
  )
}

export default AppDrawer
