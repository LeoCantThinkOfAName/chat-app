import React, { useState, useRef, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Create from '@material-ui/icons/Create';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
	initValue: string;
	fontSize: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		wrapper: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		input: {
			outline: 'none',
			marginRight: theme.spacing(1),
		},
	})
);

export const ProfileInputs: React.FC<Props> = ({ initValue, fontSize }) => {
	const classes = useStyles();
	const inputRef = useRef<HTMLDivElement>(null);
	const [ editable, setEditable ] = useState(false);

	const handleClick = () => {
		setEditable(true);
		if (inputRef.current) {
			setEditable(true);
		}
	};

	const handleBlur = () => {
		setEditable(false);
		console.log('over');
		if (inputRef.current) {
			if (inputRef.current.innerText.length < 3) {
				inputRef.current.innerText = initValue;
			}
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			handleBlur();
		}
	};

	useEffect(
		() => {
			if (editable && inputRef.current) {
				const input = inputRef.current;
				const range = document.createRange();
				range.selectNodeContents(input);
				range.collapse(false);
				const select = window.getSelection();
				if (select) {
					select.removeAllRanges();
					select.addRange(range);
				}
			}
		},
		[ editable ]
	);

	return (
		<div className={classes.wrapper}>
			<div
				ref={inputRef}
				suppressContentEditableWarning
				contentEditable={editable}
				onBlur={handleBlur}
				onKeyDown={handleKeyDown}
				className={classes.input}
				style={{
					fontSize,
				}}
			>
				{initValue}
			</div>
			<IconButton onClick={handleClick} aria-label="toggle password visibility" size="small">
				<Create fontSize="small" />
			</IconButton>
		</div>
	);
};
