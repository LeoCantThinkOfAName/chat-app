import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";
import { Message } from "@chat-app/shared";

interface BubbleProps {
  alignSelf?: "flex-start" | "flex-end";
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
    },
  })
);

const BaseBubble: React.FC<BubbleProps> = ({
  alignSelf = "flex-start",
  message,
}) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      display="inline-flex"
      maxWidth="80%"
      flexDirection="column"
      alignSelf={alignSelf}
      mb={1.5}
    >
      <Paper>
        <Box py={1} px={1.5}>
          {message.message}
        </Box>
      </Paper>
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
