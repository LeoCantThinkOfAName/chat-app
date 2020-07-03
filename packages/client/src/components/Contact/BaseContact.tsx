import { User } from "@chat-app/shared";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import React from "react";

import GenericLink from "../GenericLink";
import StatusAvatar from "../StatusAvatar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface Props {
  link: string;
  showStatus?: boolean;
  contact: {
    name: User["name"];
    thumbnail: User["thumbnail"];
    status?: User["status"];
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      marginLeft: theme.spacing(2),
    },
  })
);

const BaseContact: React.FC<Props> = ({
  link,
  contact,
  children,
  showStatus = false,
}) => {
  const classes = useStyles();

  return (
    <GenericLink to={link}>
      <ListItem button>
        <StatusAvatar
          name={contact.name}
          status={showStatus ? contact.status : null}
          thumbnail={contact.thumbnail}
        />
        <Box className={classes.box}>{children}</Box>
      </ListItem>
    </GenericLink>
  );
};

export default BaseContact;
