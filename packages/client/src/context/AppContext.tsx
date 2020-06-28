import React, { useState } from 'react';
import { ThemeTypes } from '../Theme';
import { PaletteType } from '@material-ui/core';

export type LanguageTuple = 'en' | 'zh-TW';

interface StateInterface<T> {
	getter: T;
	setter: React.Dispatch<React.SetStateAction<T>>;
}

export interface AppContextInterface {
	mode: StateInterface<PaletteType>;
	theme: StateInterface<ThemeTypes>;
	language: StateInterface<LanguageTuple>;
}

export const AppContext = React.createContext<AppContextInterface>({
	mode: {
		getter: 'light',
		setter: () => 'original',
	},
	theme: {
		getter: 'original',
		setter: () => 'original',
	},
	language: {
		getter: 'en',
		setter: () => 'en',
	},
});

export const AppProvider: React.FC = ({ children }) => {
	const [ theme, setTheme ] = useState<ThemeTypes>('original');
	const [ mode, setMode ] = useState<PaletteType>('light');
	const [ language, setLanguage ] = useState<LanguageTuple>('en');

	return (
		<AppContext.Provider
			value={{
				theme: {
					getter: theme,
					setter: setTheme,
				},
				mode: {
					getter: mode,
					setter: setMode,
				},
				language: {
					getter: language,
					setter: setLanguage,
				},
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
