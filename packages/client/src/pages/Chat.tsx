import Box from "@material-ui/core/Box";
import React from "react";
import { useParams } from "react-router-dom";

import { MyBubble } from "../components/ChatBubble";
import BaseBubble from "../components/ChatBubble/BaseBubble";
import { fakeMessages } from "../assets/dev/fakeMessages";

const Chat = () => {
  const { id } = useParams();
  const currentRoom = fakeMessages[id];

  return (
    <Box p={2} display="flex" flexDirection="column">
      {currentRoom.map((message) => {
        if (message.userId === 1) {
          return <MyBubble key={message.id} message={message} />;
        } else {
          return <BaseBubble key={message.id} message={message} />;
        }
      })}
    </Box>
  );
};

export default Chat;
