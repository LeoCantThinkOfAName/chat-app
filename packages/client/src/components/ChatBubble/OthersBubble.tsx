import { Message } from "@chat-app/shared";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import React from "react";

import BaseBubble from "./BaseBubble";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface Props {
  message: Message;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      marginRight: theme.spacing(1),
    },
  })
);

const OthersBubble: React.FC<Props> = ({ children, message }) => {
  const classes = useStyles();
  const user = message.user;
  const userName = user.name;

  return (
    <BaseBubble
      alignSelf="flex-start"
      maxWidth="calc(80% + 40px)"
      message={message}
    >
      <Box display="flex">
        <Avatar className={classes.avatar}>
          {userName ? userName[0].toUpperCase() : null}
        </Avatar>
        <Paper>
          <Box py={1} px={1.5}>
            {message.message}
          </Box>
        </Paper>
      </Box>
    </BaseBubble>
  );
};

export default OthersBubble;
