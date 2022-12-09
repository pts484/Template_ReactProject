import languagePack from './languages';
import { useSelector } from 'react-redux';

const useLanguages = (): Record<string, any> => {
	const { language } = useSelector((store: RootStore) => store.GlobalStatus);

	return languagePack[language] ?? languagePack[navigator.language];
};

export { useLanguages };
