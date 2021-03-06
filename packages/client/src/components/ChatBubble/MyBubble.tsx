import { Message } from "@chat-app/shared";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import React from "react";

import BaseBubble from "./BaseBubble";

interface Props {
  message: Message;
}

const MyBubble: React.FC<Props> = ({ children, message }) => {
  return (
    <BaseBubble alignSelf="flex-end" message={message}>
      <Paper>
        <Box py={1} px={1.5}>
          {message.message}
        </Box>
      </Paper>
    </BaseBubble>
  );
};

export default MyBubble;
