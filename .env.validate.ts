import dotenv from 'dotenv';
import envValidator from 'dotenv-validator';

export default (env: any) => {
	/** **************************
	 * .env Check
	 ** **************************/

	const envDefault = {
		...dotenv.config({ path: '.env' }).parsed,
		...dotenv.config({ path: `.env.${env}` }).parsed,
	};

	const envParsed = {
		...dotenv.config({ path: '.env' }).parsed,
		...dotenv.config({ path: `.env.${env}` }).parsed,
	};

	/** **************************
	 *  env validate Check Rules
	 ** **************************/
	console.log(`✅ Checked .env.${env}`);
	console.log(envDefault);

	const envRules = {
		/**
		 * .env
		 */
		TZ: {
			required: true,
		},
		REACT_APP_IS_APP: {
			required: true,
		},
		REACT_APP_NAME: {
			required: true,
		},
		/**
		 * .env.development
		 * .env.production
		 */
		REACT_APP___BACKEND_HOST_URL__: {
			required: true,
			validator: (value) => value?.length > 0,
		},
	};

	const _processEnv = process.env;

	process.env = { ...envDefault, ...envParsed };

	envValidator({
		envDefault,
		envParsed,
		envRules,
	});

	process.env = { ..._processEnv, ...envDefault, ...envParsed };
	console.log(process.env);
};
