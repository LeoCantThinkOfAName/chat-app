import { Message } from '@chat-app/shared';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

import { useAppContext } from '../../hooks/useAppContext';
import BaseBubble from './BaseBubble';

interface Props {
  message: Message;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dark: {
      backgroundColor: theme.palette.primary.dark,
    },
    light: {
      backgroundColor: theme.palette.primary.light,
    },
    avatar: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      marginRight: theme.spacing(1),
    },
  })
);

const OthersBubble: React.FC<Props> = ({ children, message }) => {
  const classes = useStyles();
  const { mode } = useAppContext();
  const user = message.user;
  const userName = user.name;

  return (
    <BaseBubble
      alignSelf="flex-start"
      maxWidth="calc(80% + 40px)"
      message={message}
    >
      <Box display="flex">
        <Avatar className={classes.avatar}>
          {userName ? userName[0].toUpperCase() : null}
        </Avatar>
        <Paper className={classes[mode]}>
          <Box py={1} px={1.5}>
            {message.message}
          </Box>
        </Paper>
      </Box>
    </BaseBubble>
  );
};

export default OthersBubble;
