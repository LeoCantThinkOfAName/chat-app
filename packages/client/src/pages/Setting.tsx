import Box from '@material-ui/core/Box';
import React from 'react';
import { useTranslation } from 'react-i18next';

import PageTitle from '../components/PageTitle';
import { SearchLanguage, SearchTheme } from '../components/AutoCompletes';
import { DarkModeSwitch } from '../components/Switches';

const Setting = () => {
	const { t } = useTranslation();

	return (
		<Box p={2}>
			<PageTitle>{t('general.title.page.settings')}</PageTitle>
			<Box py={2}>
				<SearchLanguage />
			</Box>
			<Box py={2}>
				<DarkModeSwitch />
			</Box>
			<Box py={2}>
				<SearchTheme />
			</Box>
		</Box>
	);
};

export default Setting;
