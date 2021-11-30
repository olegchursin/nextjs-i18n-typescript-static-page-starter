import i18next from 'i18next';
import Head from 'next/head';

import LanguageMenu from './LanguageMenu';

const Layout: React.FC = function ({ children }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta name="og:title" content={i18next.t('siteMeta.title')} />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>{' '}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="crossorigin"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
					rel="stylesheet"
				/>
				<title>{i18next.t('siteMeta.title')}</title>
			</Head>

			<header>
				<h1>{i18next.t('siteMeta.title')}</h1>
				<LanguageMenu />
			</header>

			<main>{children}</main>
		</>
	);
};
export default Layout;
