/** @type {import('tailwindcss').Config} */
module.exports = {
	// prefix: 'cic-', 모든 클래스명에 접두사로 cic-가 붙는 프리픽스.
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			'all-black': '#000',
			'all-white': '#fff',

			'gray-scale-01': '#fbfbfb',
			'gray-scale-02': '#f7f7f7',
			'gray-scale-03': '#f5f4f3',
			'gray-scale-04': '#efefef',
			'gray-scale-05': '#ececec',
			'gray-scale-06': '#dfdfdf',
			'gray-scale-07': '#c1c1c1',
			'gray-scale-08': '#a5a5a5',
			'gray-scale-09': '#8b8b8b',
			'gray-scale-10': '#6f6f6f',
			'gray-scale-11': '#555',
			'gray-scale-12': '#3d3d3d',
			'gray-scale-13': '#333',
			'gray-scale-14': '#242424',
			'gray-scale-15': '#171717',

			'light-text-01': '#242424',
			'light-text-02': '#3d3d3d',
			'light-text-03': '#6f6f6f',
			'light-text-04': '#8b8b8b',
			'light-text-05': '#c1c1c1',

			'table-scale-01': '#c0c2c9',
			'table-scale-02': '#e2e4e7',
			'table-scale-03': '#f0f1f3',
			'table-scale-04': '#f8f9fa',

			'brand-yellow-01': '#f9b337',
			'brand-yellow-02': '#fcd535',
			'brand-yellow-03': '#ffe664',
			'brand-yellow-04': '#ffe99b',
			'brand-orange-01': '#f47523',
			'brand-orange-02': '#f39728',
			'brand-orange-03': '#faa628',
			'brand-orange-04': '#f0b326',

			'brand-bl-50': '#f4f6fa',
			'brand-bl-100': '#e9ecf4',
			'brand-bl-600': '#7ab6ef',
			'brand-bl-800': '#0096ff',
			'brand-bl-900': '#3366ff',

			'state-active-01': '#53c00a',
			'state-active-02': '#e5f1dd',
			'state-pass-01': '#4189c6',
			'state-pass-02': '#cde1f2',
			'state-reject': '#ffb2b2',
			'state-no': '#6a8bff',

			'red-scale-red-01': '#f5511d',
			'red-scale-red-02': '#f05c2e',
			'transparent': 'transparent',
		},
		extend: {},
	},
	plugins: [],
};
