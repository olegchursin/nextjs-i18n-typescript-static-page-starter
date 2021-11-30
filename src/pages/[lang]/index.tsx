import i18next from 'i18next';
import Link from 'next/link';

import Layout from '../../components/Layout';
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';

export default function LangIndex({ language }) {
	return (
		<Layout>
			<h3>
				Homepage: <code>pages/[lang]/index.tsx</code>
			</h3>

			<h3>
				{i18next.t('language')}: {language}
			</h3>

			<p>{i18next.t('helloWorld')}</p>

			<Link
				prefetch={false}
				href={`/[lang]/pageTwo`}
				as={`/${language}/pageTwo`}
			>
				<a>/{language}/pageTwo</a>
			</Link>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getAllLanguageSlugs();
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const language = getLanguage(params.lang);
	return {
		props: {
			language
		}
	};
}
