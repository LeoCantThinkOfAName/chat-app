import React from "react";
import BaseBubble from "./BaseBubble";

const MyBubble: React.FC = ({ children }) => {
  return <BaseBubble alignSelf="flex-end">{children}</BaseBubble>;
};

export default MyBubble;
