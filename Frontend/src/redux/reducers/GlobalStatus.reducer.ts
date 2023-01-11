import { createAction, createReducer } from '@reduxjs/toolkit';
import _default from 'react-redux/es/components/connect';

/** 상태값 관리 및 내부 로직을 숨기기 위한 클래스화 */
class StateSetter {
	/** ***************** member Variables  ****************** */
	private readonly keyNameLanguage: string = `${process.env.REACT_APP_NAME}Language` ?? 'myAppLanguage';
	private updateConut: number = 0; // addEventHandler('resize') 에 대한 스킵 횟수

	private readonly status: {
		languageBrowser: string;
		language: string;
		mobile: boolean;
		platform: 'android' | 'ios' | 'linux' | 'windows' | 'none';
		breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
		orientation: 'desktop' | { angle: number; type: string };
	};

	constructor() {
		this.status = {
			languageBrowser: navigator.language,
			language: this.getBrowserLanguage(),
			mobile: this._mobile(),
			platform: this._platform(),
			breakpoint: this._breakpoint(),
			orientation: this._orientation(),
		};
	}

	/** ***************** member Functions  ****************** */

	public get = (): typeof this.status => this.status;

	public getBrowserLanguage = (): string => {
		return localStorage.getItem(this.keyNameLanguage) ?? navigator.language;
	};

	public chageStatus = (updateInterval: number = 3): typeof this.status | undefined => {
		if (++this.updateConut % updateInterval === 0) {
			this.updateConut = 0;
			return {
				languageBrowser: navigator.language,
				language: this.getBrowserLanguage(),
				mobile: this._mobile(),
				platform: this._platform(),
				breakpoint: this._breakpoint(),
				orientation: this._orientation(),
			};
		}
		return undefined;
	};

	public _language = (languageCode: string): typeof this.status.language => {
		console.log(languageCode);

		languageCode = languageCode ?? this.getBrowserLanguage();

		localStorage.setItem(this.keyNameLanguage, languageCode);
		return languageCode;
	};

	public _breakpoint = (): typeof this.status.breakpoint => {
		if (window.innerWidth >= 1400) return 'xxl';
		if (window.innerWidth >= 1200) return 'xl';
		if (window.innerWidth >= 992) return 'lg';
		if (window.innerWidth >= 768) return 'md';
		if (window.innerWidth >= 576) return 'sm';
		return 'xs';
	};

	public _platform = (): typeof this.status.platform => {
		const _userAgent = navigator.userAgent.toLowerCase();

		if (_userAgent.match(/android/i) != null) return 'android';
		if (_userAgent.match(/iphone|ipad|ipod|mac os|macintosh/i) != null) return 'ios';
		if (_userAgent.match(/window/i) != null) return 'windows';
		if (_userAgent.match(/blackberry|linux/i) != null) return 'linux';
		return 'none';
	};

	public _orientation = (): typeof this.status.orientation => {
		return navigator.maxTouchPoints <= 0
			? 'desktop'
			: {
					angle: window.screen.orientation.angle,
					type: window.screen.orientation.type,
			  };
	};

	public _mobile = (): typeof this.status.mobile => {
		return Boolean(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
	};
}

/** ***************** ACTION FUNCTIONS ****************** */
export const _STATUS_ALL_ = createAction<number>('GLOBAL_STATUS/STATUS_ALL');
export const _LANGUAGE_ = createAction<string>('GLOBAL_STATUS/LANGUAGES');
export const _MOBILE_ = createAction('GLOBAL_STATUS/MOBILE');
export const _PLATFORM_ = createAction('GLOBAL_STATUS/PLATFORM');
export const _ORIENTATION_ = createAction('GLOBAL_STATUS/ORIENTATION');
export const _BREAKPOINT_ = createAction('GLOBAL_STATUS/BREAKPOINT');

/** ***************** . ***************** */
const globalStatus = new StateSetter();

const reducer = createReducer(globalStatus.get(), (builder): void => {
	builder
		/**
		 * 자동으로 변경되어야할 스테이트 변경 (_STATUS_ALL_)
		 */
		.addCase(_STATUS_ALL_, (state, action) => {
			const newStatus = globalStatus.chageStatus(action.payload);
			if (!newStatus) return;

			state.mobile = newStatus.mobile;
			state.platform = newStatus.platform;
			state.breakpoint = newStatus.breakpoint;
			state.orientation = newStatus.orientation;
		})

		/**
		 * 언어 변경 (_LANGUAGE_)
		 */
		.addCase(_LANGUAGE_, (state, action) => {
			state.language = globalStatus._language(action.payload);
		})

		/**
		 * Mobile (_MOBILE_);
		 */
		.addCase(_MOBILE_, (state) => {
			state.mobile = globalStatus._mobile();
		})

		/**
		 * Platform (_PLATFORM_);
		 */
		.addCase(_PLATFORM_, (state) => {
			state.platform = globalStatus._platform();
		})

		/**
		 * Orientation (_ORIENTATION_);
		 */
		.addCase(_ORIENTATION_, (state) => {
			state.orientation = globalStatus._orientation();
		})

		/**
		 * Breakpoint (_BREAKPOINT_);
		 */
		.addCase(_BREAKPOINT_, (state) => {
			state.breakpoint = globalStatus._breakpoint();
		});
});

export default reducer;
