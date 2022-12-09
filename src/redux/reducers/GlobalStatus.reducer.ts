import { createAction, handleActions, Action } from 'redux-actions';
import { applyPenders } from 'redux-pender';
/** ***************** declare  ****************** */

/** ***************** internal Function  ****************** */
const _generateBreakpoint = (): 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' => {
	if (window.innerWidth >= 1400) return 'xxl';
	if (window.innerWidth >= 1200) return 'xl';
	if (window.innerWidth >= 992) return 'lg';
	if (window.innerWidth >= 768) return 'md';
	if (window.innerWidth >= 576) return 'sm';
	return 'xs';
};

const _platform = (): 'android' | 'ios' | 'linux' | 'windows' | 'none' => {
	const _userAgent = navigator.userAgent.toLowerCase();

	if (_userAgent.match(/android/i) != null) return 'android';
	if (_userAgent.match(/iphone|ipad|ipod|mac os|macintosh/i) != null) return 'ios';
	if (_userAgent.match(/window/i) != null) return 'windows';
	if (_userAgent.match(/blackberry|linux/i) != null) return 'linux';
	return 'none';
};

const _orientation = (): string =>
	!navigator.maxTouchPoints ? 'desktop' : !window.orientation ? 'portrait' : 'landscape';

const _mobile = (): boolean =>
	Boolean(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));

/** ***************** LocalStorage Key Names ****************** */
export const keyNameLanguage: string = process.env.REACT_APP_NAME ?? 'myLanguage';

/** ***************** ACTIONS ****************** */
const SERVER = 'GLOBAL_STATUS/SERVER';
const LANGUAGE = 'GLOBAL_STATUS/LANGUAGES';
const DEVICE = 'GLOBAL_STATUS/DEVICE';
const MOBILE = 'GLOBAL_STATUS/MOBILE';
const PLATFORM = 'GLOBAL_STATUS/PLATFORM';
const ORIENTATION = 'GLOBAL_STATUS/ORIENTATION';
const BREAKPOINT = 'GLOBAL_STATUS/BREAKPOINT';

/** ***************** ACTION FUNCTIONS ****************** */
export const setLanguage = createAction(LANGUAGE, (data: string) => data);
export const isDevice = createAction(DEVICE);
export const isMobile = createAction(MOBILE);
export const isPlatform = createAction(PLATFORM);
export const isOrientation = createAction(ORIENTATION);
export const detectedBreakpoint = createAction(BREAKPOINT);

const initialState = {
	languageBrowser: navigator.language,
	language: localStorage.getItem(keyNameLanguage) ?? navigator.language,
	mobile: _mobile(),
	platform: _platform(),
	breakpoint: _generateBreakpoint(),
	orientation: _orientation(),
	device: navigator.userAgent.toLowerCase(),
};

const reducer = handleActions(
	{
		[LANGUAGE]: (state: RootStore, action: Action<any>) => {
			let _language: string = action.payload;

			if (!_language) {
				_language = localStorage.getItem(keyNameLanguage) ?? navigator.language;
			}

			localStorage.setItem(keyNameLanguage, _language);

			return {
				...state,
				language: _language,
			};
		},

		[DEVICE]: (state) => ({
			...state,
			device: navigator.userAgent.toLowerCase(),
		}),

		[MOBILE]: (state) => ({
			...state,
			mobile: _mobile(),
		}),

		[PLATFORM]: (state) => ({
			...state,
			isPlatform: _platform(),
		}),

		[ORIENTATION]: (state) => ({
			...state,
			orientation: _orientation(),
		}),

		[BREAKPOINT]: (state, action) => {
			return {
				...state,
				breakpoint: _generateBreakpoint(),
			};
		},
	},
	initialState,
);

// export default reducer;
export default applyPenders(reducer, [
	{
		type: SERVER,
		onPending: (state, action) => {
			return state;
		},
		onSuccess: (state, action) => ({
			...state,
			server: action.payload.data,
		}),
		onFailure: (state, action) => {
			console.log('onFailure', action.payload);
			return {
				...state,
				server: null,
			};
		},
	},
]);
