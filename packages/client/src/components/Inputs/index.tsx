import { User } from '@chat-app/shared';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Create from '@material-ui/icons/Create';
import React, { useContext, useEffect, useRef, useState } from 'react';

import { UserContext } from '../../context/UserContext';
import { useRest } from '../../hooks';

interface Props {
	initValue: string;
	fontSize: string;
	minimum?: number;
	column: keyof User;
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

export const ProfileInputs: React.FC<Props> = ({ initValue, column, fontSize, minimum = 3 }) => {
	const classes = useStyles();
	const inputRef = useRef<HTMLDivElement>(null);
	const { user, setUser } = useContext(UserContext);
	const [ editable, setEditable ] = useState(false);
	const [ fetchData, setRequest ] = useRest<User>();

	const handleClick = () => {
		setEditable(true);
		if (inputRef.current) {
			setEditable(true);
		}
	};

	const handleBlur = () => {
		setEditable(false);
		const { current } = inputRef;
		if (current) {
			if (current.innerText.length < minimum) {
				current.innerText = initValue;
				return;
			}

			if (current.innerText !== initValue) {
				setRequest({
					service: 'users',
					method: 'patch',
					data: { [column]: current.innerText },
					id: user.id,
				});
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
			if (fetchData && fetchData.data && inputRef.current) {
				if (inputRef.current.innerText !== user.name) {
					setUser({ ...user, [column]: inputRef.current.innerText });
				}
			}
		},
		[ fetchData, user, column, setUser ]
	);

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
