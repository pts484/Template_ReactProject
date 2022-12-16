import KR from './ko_KR';
// import JP from '.ja_JP';
import CN from './zh_CN';
import TW from './zh_TW';
import US from './en_US';

interface LanguageType {
	[index: string]: Record<string, any>;
}

const obj: LanguageType = {
	'ko-KR': KR,
	'zh-CN': CN,
	'zh-TW': TW,
	'en-US': US,
	// 'ja-JP': JP,
};

export default obj;
