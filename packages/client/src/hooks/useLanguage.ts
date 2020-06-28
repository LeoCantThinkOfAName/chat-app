import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useLanguage = () => {
	const { language: { getter, setter } } = useContext(AppContext);

	return { language: getter, setLanguage: setter };
};
