import polyglotI18nProvider from 'ra-i18n-polyglot';
import ArabicMessages from 'ra-language-arabic';
import englishMessages from 'ra-language-english';
import { resolveBrowserLocale } from 'react-admin';
import { arabicTranslations, englishTranslations } from '../index';
// const i18nProvider = polyglotI18nProvider(locale =>
//     locale === 'ar' ? ArabicMessages : englishMessages,
//     'en' // Default locale
// );

const getDefaultLocale = () => {
	let defaultLocale: string | undefined;
	localStorage.getItem('current_locale')
		? (defaultLocale = localStorage.getItem('current_locale')!)
		: (defaultLocale = resolveBrowserLocale());
	return defaultLocale;
};
const i18nProvider = polyglotI18nProvider((locale) => {
	if (locale === 'en') {
		// initial call, must return synchronously
		let messages = {
			...englishMessages,
			custom_root: { ...englishTranslations },
		};
		console.log(messages);
		return { ...englishMessages, custom_root: { ...englishTranslations } };
	}
	if (locale === 'ar') {
		return { ...ArabicMessages, custom_root: { ...arabicTranslations } };
	} else {
		return englishMessages;
	}
}, getDefaultLocale());
export default i18nProvider;
