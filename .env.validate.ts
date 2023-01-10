import dotenv from 'dotenv';
import envValidator from 'dotenv-validator';
import mongoose, { Schema } from 'mongoose';

export default async (env: any) => {
	/** **************************
	 * Setup Env
	 ** **************************/

	/** 검사할 환경변수 룰 정의 */
	const envRules = {
		/**
		 * .env
		 */
		TZ: {
			required: true,
		},
		MONGO_URL: {
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

		/**
		 * mongoDB에서 불러온 환경변수
		 */
		PAYMENT_KLAYTN_OWNER_ADDRESS: {
			required: true,
		},
	};

	/** 검사 대상인 환경변수 */
	const envDefault = {
		...dotenv.config({ path: '.env' }).parsed,
		...dotenv.config({ path: `.env.${env}` }).parsed,
	};

	/** 검사할 환경변수 룰 정의 */
	const envParsed = {
		...dotenv.config({ path: '.env' }).parsed,
		...dotenv.config({ path: `.env.${env}` }).parsed,
	};

	/** **************************
	 * MongoDB에서 데이터 가져오기
	 * 연결실패 시 에러 표시 후 종료
	 ** **************************/
	await mongoose
		.connect(envDefault.MONGO_URL, {
			// useNewUrlParser: true,
			// useUnifiedTopology: true,
			connectTimeoutMS: 5000,
		})
		.catch((err) => {
			throw err;
		});

	/**
	 * Mongo DB 연결 성공 후 환경변수 데이터 가져오기
	 *
	 */
	console.log(`MongoDB Connected !! Collection : ${env}`);
	const SchemaEnvironment = new Schema(
		{
			key: { type: String, required: true },
			value: { type: String, required: true },
			description: { type: String, required: true },
		},
		{ collection: env, timestamps: true },
	);
	const Environment = mongoose.model(env, SchemaEnvironment);
	const expendedEnv = await Environment.find({});
	expendedEnv.map((el, index) => {
		envDefault[el.key] = '';
		envParsed[el.key] = el.value;
	});

	/** **************************
	 *  env validate Check Rules
	 ** **************************/
	console.log(`✅ Checked .env.${env}`);

	process.env = {
		...process.env,
		...envDefault,
		...envParsed,
	};

	envValidator({
		envDefault,
		envParsed,
		envRules,
	});
};
