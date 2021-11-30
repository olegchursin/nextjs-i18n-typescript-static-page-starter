import '../i18n/init';
import '../styles/global.css';

import i18next from 'i18next';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	i18next.changeLanguage(pageProps.language);
	return <Component {...pageProps} />;
}

export default MyApp;
