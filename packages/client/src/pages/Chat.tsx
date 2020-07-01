import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import InboxIcon from "@material-ui/icons/Inbox";
import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { fakeMessages } from "../assets/dev/fakeMessages";
import { MyBubble } from "../components/ChatBubble";
import BaseBubble from "../components/ChatBubble/BaseBubble";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    empty: {
      color: theme.palette.grey[500],
    },
  })
);

const Chat = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const classes = useStyles();
  const currentRoom = fakeMessages[id];

  return (
    <Box p={2} display="flex" flexDirection="column" flex={1}>
      {id ? (
        currentRoom.map((message) => {
          if (message.userId === 1) {
            return <MyBubble key={message.id} message={message} />;
          } else {
            return <BaseBubble key={message.id} message={message} />;
          }
        })
      ) : (
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            className={classes.empty}
          >
            <InboxIcon fontSize="large" />
            <Typography variant="caption">
              {t("general.placeholder.page.chat")}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Chat;
