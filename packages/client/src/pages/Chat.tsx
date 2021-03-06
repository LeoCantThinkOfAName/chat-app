import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InboxIcon from '@material-ui/icons/Inbox';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import AutoSizer from 'react-virtualized-auto-sizer';
// @ts-ignore
import { DynamicSizeList, ListChildComponentProps } from 'react-window-dynamic';

import { Message } from '../../../shared/dist/Message';
import { MyBubble } from '../components/ChatBubble';
import OthersBubble from '../components/ChatBubble/OthersBubble';
import ChatInput from '../components/ChatInput';
import { useGlobalStyles } from '../Theme';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		window: {
			padding: theme.spacing(2),
			'&>div': {
				display: 'flex',
				flexDirection: 'column',
			},
		},
		paper: {
			backgroundColor: theme.palette.background.paper,
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			margin: 0,
			zIndex: 1,
		},
		box: {
			height: theme.spacing(7),
			display: 'flex',
			alignItems: 'center',
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2),
			width: '100%',
			borderBottomWidth: '1px',
			borderBottomColor: theme.palette.divider,
			borderBottomStyle: 'solid',
		},
	})
);

export const Conversation = ({ index, data }: ListChildComponentProps) => {
	const context: Message = data[index];
	return context.user.id === 1 ? <MyBubble message={context} /> : <OthersBubble message={context} />;
};

const Chat = () => {
	const { t } = useTranslation();
	const { id } = useParams();
	const classes = useStyles();
	const globalClasses = useGlobalStyles();
	// const currentRoom = fakeMessages[id];

	return (
		<Box display="flex" flexDirection="column" flex={1}>
			{id ? (
				<Box display="flex" flexDirection="column" flex={1} position="relative">
					<Box className={clsx(classes.paper, classes.box)}>
						<Typography component="p" variant="subtitle2">
							User {id}
						</Typography>
					</Box>
					<Box className={classes.box} />
					<Box flex={1}>
						<AutoSizer>
							{({ height, width }) => (
								// <DynamicSizeList
								// 	height={height}
								// 	width={width}
								// 	itemCount={currentRoom.length}
								// 	itemData={currentRoom}
								// 	className={classes.window}
								// >
								// 	{Conversation}
								// </DynamicSizeList>
								<div />
							)}
						</AutoSizer>
					</Box>
					<ChatInput id={id} />
				</Box>
			) : (
				<Box flex={1} display="flex" alignItems="center" justifyContent="center">
					<Box
						display="flex"
						flexDirection="column"
						alignItems="center"
						className={globalClasses.emptyPagePlaceholder}
					>
						<InboxIcon fontSize="large" />
						<Typography component="p" variant="caption">
							{t('general.placeholder.page.chat')}
						</Typography>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default Chat;
