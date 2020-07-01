import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InboxIcon from "@material-ui/icons/Inbox";
import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { fakeMessages } from "../assets/dev/fakeMessages";
import { MyBubble } from "../components/ChatBubble";
import OthersBubble from "../components/ChatBubble/OthersBubble";
import AutoSizer from "react-virtualized-auto-sizer";
import { Message } from "../../../shared/dist/Message";
//@ts-ignore
import { DynamicSizeList, ListChildComponentProps } from "react-window-dynamic";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    empty: {
      color: theme.palette.grey[500],
    },
    window: {
      padding: theme.spacing(2),
      "&>div": {
        display: "flex",
        flexDirection: "column",
      },
    },
  })
);

const Conversation = ({ index, data }: ListChildComponentProps) => {
  const context: Message = data[index];
  return context.user.id === 1 ? (
    <MyBubble message={context} />
  ) : (
    <OthersBubble message={context} />
  );
};

const Chat = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const classes = useStyles();
  const currentRoom = fakeMessages[id];

  return (
    <Box display="flex" flexDirection="column" flex={1}>
      {id ? (
        <AutoSizer>
          {({ height, width }) => (
            <DynamicSizeList
              height={height}
              width={width}
              itemCount={currentRoom.length}
              itemData={currentRoom}
              className={classes.window}
            >
              {Conversation}
            </DynamicSizeList>
          )}
        </AutoSizer>
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
