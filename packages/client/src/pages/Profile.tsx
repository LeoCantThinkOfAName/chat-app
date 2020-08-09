import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Create from '@material-ui/icons/Create';
import ForumIcon from '@material-ui/icons/Forum';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

import { UserContext } from '../context/UserContext';
import { ProfileInputs } from '../components/Inputs/index';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			justifySelf: 'stretch',
			maxHeight: '100%',
			display: 'flex',
			flexDirection: 'column',
			flex: 1,
		},
		main: {
			...theme.mixins.flexCenter,
			flexDirection: 'column',
			backgroundColor: theme.palette.grey[200],
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			flex: 1,
			position: 'relative',
			color: '#fff',
		},
		mask: {
			backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))',
			height: '100%',
			width: '100%',
			position: 'absolute',
			top: 0,
			left: 0,
		},
		content: {
			...theme.mixins.flexCenter,
			position: 'relative',
			flexDirection: 'column',
		},
		avatar: {
			height: '50vw',
			width: '50vw',
			fontSize: '5rem',
			[theme.breakpoints.up('sm')]: {
				height: '25vw',
				width: '25vw',
				maxHeight: '400px',
				maxWidth: '400px',
			},
		},
		caption: {
			color: theme.palette.grey[400],
		},
		button: {
			...theme.mixins.toolbar,
			background: theme.palette.success.dark,
			'&:hover': {
				background: theme.palette.success.dark,
				opacity: 0.8,
			},
		},
		link: {
			...theme.mixins.flexCenter,
			...theme.typography.h6,
			flex: 1,
			color: theme.palette.common.white,
			textDecoration: 'none',
		},
		icon: {
			marginRight: theme.spacing(1),
		},
		thumbnailBtn: {
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
			position: 'absolute',
			top: 0,
			right: 0,
		},
	})
);

const Profile = () => {
	const { user } = useContext(UserContext);
	const classes = useStyles();
	const { id } = useParams();
	const { t } = useTranslation();

	const handleClick = () => {
		console.log('clicked');
	};

	return (
		<div className={classes.root}>
			<div
				className={classes.main}
				style={{
					backgroundImage: `url(${user.background})`,
				}}
			>
				<div className={classes.mask} />
				<div className={classes.content}>
					<Box position="relative">
						<Avatar
							variant="square"
							src={user.thumbnail ? user.thumbnail : 'https://avatars.plurk.com/6444482-big46.jpg'}
							className={classes.avatar}
						>
							{user.name[0]}
						</Avatar>
						{!id && (
							<IconButton
								size="small"
								aria-label="upload picture"
								component="span"
								className={classes.thumbnailBtn}
							>
								<PhotoCamera fontSize="small" />
							</IconButton>
						)}
					</Box>

					<ProfileInputs initValue={user.name} fontSize="1.75rem" />
					<ProfileInputs
						initValue={user.description ? user.description : "What's in your mind?"}
						fontSize="0.9rem"
					/>
				</div>
			</div>
			{id && (
				<MenuItem className={classes.button}>
					<Link to={`/chat/${id}`} className={classes.link}>
						<ForumIcon className={classes.icon} />
						{t('general.ui.button.startChattingWith')}
						{id}
					</Link>
				</MenuItem>
			)}
		</div>
	);
};

export default Profile;
