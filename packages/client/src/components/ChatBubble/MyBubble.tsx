import React from "react";
import BaseBubble from "./BaseBubble";
import { Message } from "@chat-app/shared";

interface Props {
  message: Message;
}

const MyBubble: React.FC<Props> = ({ children, message }) => {
  return (
    <BaseBubble alignSelf="flex-end" message={message}>
      {children}
    </BaseBubble>
  );
};

export default MyBubble;
