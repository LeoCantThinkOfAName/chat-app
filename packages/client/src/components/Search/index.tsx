import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { fakeContacts } from '../../assets/dev/fakeUserData';
import Option from './Option';

interface Props {
  type: "profile" | "chat";
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
    }
	})
);

const Search: React.FC<Props> = ({type}) => {
	const classes = useStyles();
  const { t } = useTranslation();

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<Autocomplete
        id="search-contact"
        options={fakeContacts}
        getOptionLabel={(option) => option.name}
        renderOption={(option) => (<Option contact={option} link={`/${type}/${option.id}`}/>)}
        clearOnEscape
        classes={{
          root: classes.root,
          option: classes.option
        }}
        renderInput={(params) => <TextField {...params} label={t('general.ui.search.contact')}/>}
      />
		</form>
	);
};

export default Search;
