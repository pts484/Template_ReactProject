/***************************************************************************************
 * Custum CSS 또는 SCSS
 * CSS 라이브러리 그외 기타 JS 라이브러리를 npm install 없이 추가하고 싶을 경우 이곳에 추가
 *
 * 라이브러리 파일은 /src/include/lib에 복사 후 여기에서 import 한다.
 **************************************************************************************/

// import '';
/** 현석 테스트 중인 import 구문, tailwind도 포함. */
import '@/styles/test/_import.scss';

/** Bootstrap 5 */
// import 'bootstrap/scss/bootstrap.scss'; // SCSS

/** 디자인 시스템 */
// import '@design/import.scss';

import '@/styles/import.scss';
/**************************************************************************************
 *
 * npm install로 설치된 라이브러리 또는 그 외 라이브러리를 전역 개체에 미리 import 하여 사용하고 싶을 경우
 * 여기서 아래에서 등록
 *
 * 반드시 /src/react-app-env.d.ts 에서 Window Interface 정의 해줄것!
 **************************************************************************************/

import $ from 'jquery';
import toastr from 'toastr';
import 'toastr/build/toastr.css';
import { basename } from 'path';

declare global {
	interface Window {
		$?: typeof import('jquery'); // JQuery variable
		// klaytn?: any;   // Google Chrome Browser KaiKas Extension variable
		// ethereum?: any; // Google Chrome Browser Metamask Extension variable
		// caver?: import('caver-js');    // caver-js variable
		toastr?: typeof import('toastr'); // toastr variable
	}
}

// ***** jQuery *****
// CRA에 기본 설치된 jQuery를 winodow 객체에 추가
// 사용법 : window.$;
window.$ = $;

// ***** Toastr Basic Theme CSS *****
// npm install 된 Toastr winodow 객체에 추가
// 컴포넌트마다 Toastr을 쓰기 위해 import toastr from 'toastr'; 을 사용하지 않아도 된다.
// 사용법 : window.toastr
window.toastr = toastr;
// toastr 옵션 설정
toastr.options = {
	closeButton: false,
	debug: false,
	newestOnTop: true,
	progressBar: false,
	positionClass: 'toast-bottom-full-width',
	preventDuplicates: false,
	onclick: () => {},
	showDuration: 300,
	hideDuration: 1000,
	timeOut: 3000,
	extendedTimeOut: 1000,
	showEasing: 'swing',
	hideEasing: 'linear',
	showMethod: 'fadeIn',
	hideMethod: 'fadeOut',
};

// ***** window.console Override *****
// 사용법 : console.log(data);
const isDev = process.env.NODE_ENV === 'development';
window.console = isDev
	? window.console
	: ((oldCons: any): any => {
			return {
				log: function (text: any) {
					isDev && oldCons.log(text);
				},
				info: function (text: any) {
					isDev && oldCons.info(text);
				},
				warn: function (text: any) {
					isDev && oldCons.warn(text);
				},
				error: function (text: any) {
					oldCons.error(text);
				},
			};
	  })(window.console);
