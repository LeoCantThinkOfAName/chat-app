import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useGlobalTheme = () => {
	const { theme: { getter, setter } } = useContext(AppContext);

	return { theme: getter, setTheme: setter };
};
