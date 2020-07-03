import React from "react";
import { ChatContact as ChatContactType } from "@chat-app/shared";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import BaseContact from "./BaseContact";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

interface Props {
  contact: ChatContactType;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);

const ChatContact: React.FC<Props> = ({ contact }) => {
  const classes = useStyles();

  return (
    <BaseContact
      contact={{
        name: contact.userName,
        thumbnail: null,
        status: contact.userStatus,
      }}
      link={`/chat/${contact.chatRoomId}`}
      showStatus
    >
      <Badge
        overlap="circle"
        badgeContent={contact.unread && contact.unread}
        color="error"
        classes={{
          root: classes.badge,
          anchorOriginTopRightCircle: classes.circle,
        }}
      >
        <Typography component="p">{contact.userName}</Typography>
      </Badge>
      <Typography component="p" variant="caption" color="textSecondary">
        Last message
      </Typography>
    </BaseContact>
  );
};

export default ChatContact;
