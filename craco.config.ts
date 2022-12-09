import { when, whenDev, whenProd, whenTest } from '@craco/craco';
import webpack from 'webpack';
import validateEnv from './.env.validate';

export default {
	webpack: {
		configure: (webpackConfig: any, { env, paths }: any) => {
			/**
			 * env 환경 변수 검증
			 */
			validateEnv(env);

			/**
			 * Caver Js Webpack 5 Config
			 */
			webpackConfig.resolve.fallback = {
				'fs': false,
				'net': false,
				'stream': require.resolve('stream-browserify'),
				'crypto': require.resolve('crypto-browserify'),
				'node:crypto': require.resolve('crypto-browserify'),
				'http': require.resolve('stream-http'),
				'https': require.resolve('https-browserify'),
				'os': require.resolve('os-browserify/browser'),
				'buffer': require.resolve('buffer'),
				'url': require.resolve('url'),
			};

			return webpackConfig;
		},
	},
	jest: {
		babel: {
			addPresets: true /* (default value) */,
			addPlugins: true /* (default value) */,
		},

		configure: (jestConfig: any, { env, paths, resolve, rootDir }: any) => {
			return jestConfig;
		},
	},
	devServer: (devServerConfig: any, { env, paths, proxy, allowedHost }: any) => {
		return devServerConfig;
	},
	plugins: [
		{
			plugin: {
				overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }: any) => {
					return cracoConfig;
				},
				overrideWebpackConfig: ({
					webpackConfig,
					cracoConfig,
					pluginOptions,
					context: { env, paths },
				}: any) => {
					/**
					 * node 내장 모듈 중 buffer를 사용할 경우 발생하는
					 * Buffer is not defined 에러 해결 방법
					 * webpack.config.js 가 있는 경우  line. 140 코드를 사용하면 되지만
					 * CRACO 모듈로  webpack.config를 오버라이딩 하는 경우 아래와같이 webpackConfig 변수에 ProvidePlugin 객체를 생성해준다
					 */
					webpackConfig.plugins.push(
						new webpack.ProvidePlugin({
							Buffer: ['buffer', 'Buffer'],
							Url: ['url', 'Url'],
						}),
					);
					return webpackConfig;
				},

				overrideDevServerConfig: ({
					devServerConfig,
					cracoConfig,
					pluginOptions,
					context: { env, paths, proxy, allowedHost },
				}: any) => {
					return devServerConfig;
				},
				overrideJestConfig: ({
					jestConfig,
					cracoConfig,
					pluginOptions,
					context: { env, paths, resolve, rootDir },
				}: any) => {
					return jestConfig;
				},
			},
			options: {},
		},
		// {
		//     plugin: require('craco-alias'),
		//     options: {
		//         source: 'tsconfig',
		//         baseUrl: './', // tsconfig.paths.json에 있는 baseUrl 경로값과 맞춰줍니다.
		//         tsConfigPath: 'tsconfig.paths.json',
		//         debug: false, // 에러가 날 경우 true로 바꾸고 디버깅 하면 대부분의의 문제해결!
		//     },
		// },
	],
	eslint: {
		enable: true /* (default value) */,
		mode: 'extends' /* (default value) */ || 'file',

		configure: (eslintConfig: any, { env, paths }: any) => {
			/* ... */
			return eslintConfig;
		},

		pluginOptions: (eslintPluginOptions: any, { env, paths }: any) => {
			/* ... */
			return eslintPluginOptions;
		},
	},
};
