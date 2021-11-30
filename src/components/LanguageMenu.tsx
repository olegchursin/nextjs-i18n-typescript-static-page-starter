import i18next from 'i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { languages } from '../i18n/config';

const LanguageMenu: React.FC = () => {
	const router = useRouter();
	const { pathname } = router;

	return (
		<div className="language-menu">
			{languages.map((lang, index) => {
				const isActive = i18next.language === lang;
				const path = pathname.replace(/\[lang\]/i, lang);

				return (
					<Link key={index} prefetch={false} href={pathname} as={path}>
						<a className={isActive ? 'active' : ''}>{i18next.t(lang)}</a>
					</Link>
				);
			})}
		</div>
	);
};

export default LanguageMenu;
