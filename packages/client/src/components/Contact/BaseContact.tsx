import React from "react";
import GenericLink from "../GenericLink/index";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";

import clsx from "clsx";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { User } from "@chat-app/shared";
import Box from "@material-ui/core/Box";

interface Props {
  link: string;
  contact: {
    name: User["name"];
    thumbnail: User["thumbnail"];
  };
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      marginRight: theme.spacing(2),
      position: "relative",
      overflow: "visible",
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
      fontSize: 12,
    },
  })
);

const BaseContact: React.FC<Props> = ({
  link,
  contact,
  children,
  className = undefined,
}) => {
  const classes = useStyles();

  return (
    <GenericLink to={link}>
      <ListItem button>
        <Avatar
          alt={contact.name}
          className={className || clsx(classes.avatar)}
        >
          {contact.name && contact.name[0]}
        </Avatar>
        <Box>{children}</Box>
      </ListItem>
    </GenericLink>
  );
};

export default BaseContact;
