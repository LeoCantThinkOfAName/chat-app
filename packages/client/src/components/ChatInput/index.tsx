import React, {useState} from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      backgroundColor: theme.palette.background.paper,
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    input: {
      backgroundColor: theme.palette.background.paper,
      border: 0,
      color: theme.palette.text.primary,
      width: "100%",
      margin: 0,
      resize: "none",
      fontSize: theme.typography.h6.fontSize,
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      outline: "none",
    }
  })
);

const ChatInput = () => {
  const classes = useStyles();
  const {t} = useTranslation();
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }

  return (
    <Box className={classes.box}>
      <TextareaAutosize className={classes.input} rowsMax={8} rowsMin={3}value={message} placeholder={t("general.placeholder.input.chatInput")} onChange={handleChange}/>
    </Box>
  )
}

export default ChatInput
