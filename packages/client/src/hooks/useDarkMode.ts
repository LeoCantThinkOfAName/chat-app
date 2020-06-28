import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useDarkMode = () => {
	const { mode: { getter, setter } } = useContext(AppContext);

	return { mode: getter, setMode: setter };
};
