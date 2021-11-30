import i18next from 'i18next';
import Link from 'next/link';

import Layout from '../../components/Layout';
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';

interface IPageTwo {
	readonly language: string;
}

const PageTwo: React.FC<IPageTwo> = ({ language }) => {
	return (
		<Layout>
			<h3>
				Page Two: <code>pages/[lang]/pageTwo.tsx</code>
			</h3>

			<h3>
				{i18next.t('language')}: {language}
			</h3>

			<p>{i18next.t('helloWorld')}</p>

			<Link prefetch={false} href={`/[lang]`} as={`/${language}`}>
				<a>Back to homepage</a>
			</Link>
		</Layout>
	);
};

export default PageTwo;

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
