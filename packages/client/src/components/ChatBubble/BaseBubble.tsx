import { Message } from "@chat-app/shared";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";

interface BubbleProps {
  alignSelf?: "flex-start" | "flex-end";
  maxWidth?: string;
  message: Message;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      wordBreak: "break-word",
    },
    timestamp: {
      color: theme.palette.grey[500],
      marginTop: theme.spacing(0.5),
    },
    "flex-end": {
      textAlign: "right",
    },
    "flex-start": {
      textAlign: "left",
      marginLeft: theme.spacing(5),
    },
  })
);

const BaseBubble: React.FC<BubbleProps> = ({
  alignSelf = "flex-start",
  maxWidth = "80%",
  message,
  children,
}) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      display="inline-flex"
      maxWidth={maxWidth}
      flexDirection="column"
      alignSelf={alignSelf}
      mb={1.5}
    >
      {children}
      <Typography
        variant="caption"
        className={clsx(classes.timestamp, classes[alignSelf])}
      >
        {message.timestamp.toLocaleTimeString()}
      </Typography>
    </Box>
  );
};

export default BaseBubble;
