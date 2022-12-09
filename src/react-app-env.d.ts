/// <reference types="react-scripts" />


/**
 * 추가하고 싶은 타입을 설정
 */

declare namespace NodeJS {
	interface ProcessEnv {
		readonly NODE_ENV: 'development' | 'production' | 'test';
		readonly PUBLIC_URL: string;
		REACT_APP_NAME: string;
	}
}


type RootState = ReturnType<typeof import('@/redux_legacy/connectors.redux').RootState>;
