import flagKR from './kor.png';
// import flagJP from './jp.png';
import flagCN from './ch.png'; // 간체
// import flagTW from './ch.png'; // 간체
import flagUS from './usa.png';

interface LanguageType {
	[index: string]: Record<string, any>;
}

const obj: LanguageType = {
	'ko-KR': { code: 'KO', name: '한국어', src: flagKR },
	'en-US': { code: 'EN', name: 'English', src: flagUS },
	// 'ja-JP': { name: 'Japanse', src: ja_JP },
	'zh-CN': { code: 'CN', name: '简体中文', src: flagCN },
	'zh-TW': { code: 'TW', name: '繁體中文', src: flagCN },
};

export default obj;
