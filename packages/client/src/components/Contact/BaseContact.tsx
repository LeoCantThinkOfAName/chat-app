import { User } from "@chat-app/shared";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import React from "react";

import GenericLink from "../GenericLink";
import StatusAvatar from "../StatusAvatar";

interface Props {
  link: string;
  showStatus?: boolean;
  contact: {
    name: User["name"];
    thumbnail: User["thumbnail"];
    status?: User["status"];
  };
}

const BaseContact: React.FC<Props> = ({
  link,
  contact,
  children,
  showStatus = false,
}) => {
  return (
    <GenericLink to={link}>
      <ListItem button>
        <StatusAvatar
          name={contact.name}
          status={showStatus ? contact.status : null}
          thumbnail={contact.thumbnail}
        />
        <Box>{children}</Box>
      </ListItem>
    </GenericLink>
  );
};

export default BaseContact;
