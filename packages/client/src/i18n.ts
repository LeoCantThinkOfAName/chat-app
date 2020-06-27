import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './lang/en.json';
import zhTw from './lang/zh-TW.json';

const resources = {
	en: {
		translation: en,
	},
	'zh-TW': {
		translation: zhTw,
	},
};

const debug = true;

i18n.use(LanguageDetector).use(initReactI18next).init({
	resources,
	fallbackLng: 'en',
	debug,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
