import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Option from './ContactOption';
import { User, Friend } from '@chat-app/shared';
import useSWR from 'swr';
import { SWRKey } from '../../SWRKeys';
import { fetcher } from '../../utils/fetcher';
import { UserContext } from '../../context/UserContext';

interface Props {
	type: 'profile' | 'chat';
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginBottom: theme.spacing(2),
			'& > *': {
				margin: '0 8px',
				width: 'calc(100% - 16px)',
			},
		},
		option: {
			padding: 0,
		},
	})
);

const SearchContacts: React.FC<Props> = ({ type }) => {
	const classes = useStyles();
	const { t } = useTranslation();
	const { user } = useContext(UserContext);
	const { data, error } = useSWR(SWRKey.Friends, async () =>
		fetcher<Friend[]>({
			service: SWRKey.Friends,
			query: {
				user_id: user.id,
			},
			method: 'find',
		})
	);

	return (
		<form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
			{data && (
				<Autocomplete
					id="search-contact"
					options={data}
					getOptionLabel={(option) => option['user.name']}
					renderOption={(option) => <Option contact={option} link={`/${type}/${option.friend_id}`} />}
					clearOnEscape
					classes={{
						root: classes.root,
						option: classes.option,
					}}
					renderInput={(params) => <TextField {...params} label={t('general.ui.search.contact')} />}
				/>
			)}
		</form>
	);
};

export default SearchContacts;
