import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";

interface BubbleProps {
  alignSelf?: "flex-start" | "flex-end";
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  children,
  alignSelf = "flex-start",
}) => {
  const classes = useStyles();

  return (
    <Box
      display="inline-flex"
      maxWidth="80%"
      flexDirection="column"
      alignSelf={alignSelf}
      mb={1.5}
    >
      <Paper>
        <Box py={1} px={1.5}>
          {children}
        </Box>
      </Paper>
      <Typography
        variant="caption"
        className={clsx(classes.timestamp, classes[alignSelf])}
      >
        {new Date().toLocaleTimeString()}
      </Typography>
    </Box>
  );
};

export default BaseBubble;
