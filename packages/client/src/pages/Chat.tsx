import Box from "@material-ui/core/Box";
import React from "react";
import { useParams } from "react-router-dom";

import { MyBubble } from "../components/ChatBubble";
import BaseBubble from "../components/ChatBubble/BaseBubble";

const gibberish = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, aliquam",
  "Lorem ipsum dolor sit amet.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reprehenderit tempora perspiciatis iusto libero omnis voluptatem esse quibusdam totam animi?",
  "Lorem ipsum dolor sit.",
  "Lorem ipsum dolor sit amet consectetur.",
];

const gibberish2 = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, aliquam",
  "Lorem ipsum dolor sit amet.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reprehenderit tempora perspiciatis iusto libero omnis voluptatem esse quibusdam totam animi?",
  "Lorem ipsum dolor sit.",
  "Lorem ipsum dolor sit amet consectetur.",
];

const Chat = () => {
  const { id } = useParams();

  return (
    <Box p={2} display="flex" flexDirection="column">
      {gibberish.map((gibber) => (
        <MyBubble key={gibber}>{gibber}</MyBubble>
      ))}
      {gibberish2.map((gibber) => (
        <BaseBubble key={gibber}>{gibber}</BaseBubble>
      ))}
    </Box>
  );
};

export default Chat;
