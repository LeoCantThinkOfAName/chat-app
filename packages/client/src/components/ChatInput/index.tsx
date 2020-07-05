import React, { useState, useRef, useEffect } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

interface Props {
	id?: number;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		box: {
			backgroundColor: theme.palette.background.paper,
			borderTop: `1px solid ${theme.palette.divider}`,
			position: 'relative',
		},
		input: {
			backgroundColor: theme.palette.background.paper,
			border: 0,
			color: theme.palette.text.primary,
			width: '100%',
			margin: 0,
			resize: 'none',
			fontSize: theme.typography.h6.fontSize,
			paddingTop: theme.spacing(1),
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(10),
			outline: 'none',
		},
		button: {
			backgroundColor: theme.palette.primary.main,
			position: 'absolute',
			right: theme.spacing(2),
			top: '50%',
			transform: 'translate(0, -50%)',
			'&:hover': {
				backgroundColor: theme.palette.primary.dark,
			},
		},
	})
);

const ChatInput: React.FC<Props> = ({ id = 0 }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const [ message, setMessage ] = useState<string>('');
	const input = useRef<HTMLTextAreaElement>(null);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.target.value);
	};

	useEffect(
		() => {
			if (input.current) {
				input.current.focus();
			}
			setMessage('');
		},
		[ id ]
	);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(message);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Box className={classes.box}>
				<TextareaAutosize
					className={classes.input}
					rowsMax={8}
					rowsMin={3}
					value={message}
					placeholder={t('general.placeholder.input.chatInput')}
					onChange={handleChange}
					ref={input}
					autoComplete="off"
				/>
				<IconButton className={classes.button} type="submit">
					<SendIcon />
				</IconButton>
			</Box>
		</form>
	);
};

export default ChatInput;
