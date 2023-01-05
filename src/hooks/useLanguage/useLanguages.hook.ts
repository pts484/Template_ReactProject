import languagePack from './languages';
import { useSelector } from 'react-redux';

const useLanguages = (): Record<string, string> => {
	const { language } = useSelector((store: RootState) => store.GlobalStatus);

	return languagePack[language] ?? languagePack[navigator.language];
};

export { useLanguages };
