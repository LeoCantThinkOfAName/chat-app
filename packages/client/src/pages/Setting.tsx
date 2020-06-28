import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import { useTranslation } from 'react-i18next';

import PageTitle from '../components/PageTitle';
import { AvailableLanguages } from '../i18n';
import { useDarkMode } from '../hooks/useDarkMode';

const Setting = () => {
	const { t, i18n } = useTranslation();
	const { setMode } = useDarkMode();

	const SelectLanguage = (_e: Object, value: string) => {
		i18n.changeLanguage(value);
	};

	return (
		<Box p={2}>
			<PageTitle>{t('general.title.page.settings')}</PageTitle>
			<Box py={2}>
				<Autocomplete
					id="settings-language"
					options={AvailableLanguages}
					value={i18n.language}
					disableClearable
					onChange={SelectLanguage}
					getOptionLabel={(option) => t(`general.languages.${option}`)}
					renderInput={(params) => <TextField {...params} label={t('general.ui.search.languages')} />}
				/>
			</Box>
			<Box py={2}>
				<FormControlLabel
					control={
						<Switch
							name="dark-mode"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setMode(e.target.checked ? 'dark' : 'light')}
							inputProps={{ 'aria-label': t('general.ui.switch.darkMode') }}
						/>
					}
					label={t('general.ui.switch.darkMode')}
				/>
			</Box>
		</Box>
	);
};

export default Setting;
