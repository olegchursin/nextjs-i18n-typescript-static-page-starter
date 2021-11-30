import i18next from 'i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: React.FC = () => {
	const router = useRouter();

	useEffect(() => {
		const { pathname } = router;
		if (pathname == '/') {
			router.push('/' + i18next.language.substring(0, 2));
		}
	});
	return null;
};

export default Home;
