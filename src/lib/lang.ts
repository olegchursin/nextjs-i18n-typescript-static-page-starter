import { defaultLanguage, languages } from '../i18n/config';

export function getSortedLangsData(): ReadonlyArray<string> {
	return languages;
}

export function getAllLanguageSlugs() {
	return languages.map(lang => {
		return { params: { lang: lang } };
	});
}

export function getLanguage(lang: string): string {
	return languages.includes(lang) ? lang : defaultLanguage;
}
