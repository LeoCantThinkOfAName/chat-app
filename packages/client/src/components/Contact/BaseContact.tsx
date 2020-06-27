import React from 'react'
import GenericLink from '../GenericLink/index';
import ListItem from '@material-ui/core/ListItem';
import  Badge  from '@material-ui/core/Badge';
import  Avatar  from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import clsx from 'clsx';
import {Theme, makeStyles, createStyles} from '@material-ui/core/styles';
import { User } from '@chat-app/shared';
import Box from '@material-ui/core/Box';

interface Props {
  link: string;
  contact: User;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      marginRight: theme.spacing(2),
      position: "relative",
      overflow: "visible",
      "&::after": {
        content: "''",
        display: "block",
        position: "absolute",
        height: "calc(100% + 7px)",
        width: "calc(100% + 7px)",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: "50%"
      }
    },
    online: {
      "&::after": {
        borderColor: theme.palette.success.main,
      }
    },
    offline: {
      "&::after": {
        borderColor: theme.palette.divider,
      }
    },
    afk: {
      "&::after": {
        borderColor: theme.palette.warning.main,
      }
    },
    badge: {
      alignItems: "center",
      display: "flex",
      position: "static",
    },
    circle: {
      top: 0,
      right: 0,
      transform: "scale(1)",
      transformOrigin: "50% 50%",
      position: "static",
      marginLeft: theme.spacing(1),
    },
    description: {
      color: theme.palette.grey[500],
      fontSize: 12
    }
  }),
);

const BaseContact: React.FC<Props> = ({link, contact, children}) => {
  const classes = useStyles();

  return (
    <GenericLink to={link}>
      <ListItem button>
        <Avatar alt={contact.name} className={clsx(classes.avatar, classes[contact.status])}>
          {contact.name[0]}
        </Avatar>
        <Box>
          {children}
        </Box>
      </ListItem>
    </GenericLink>
  )
}

export default BaseContact
