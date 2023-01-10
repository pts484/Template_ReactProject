const dotenv = require('dotenv');
const mongoose = require('mongoose');

(async () => {
	const envDefault = {
		...dotenv.config({ path: '.env' }).parsed,
	};

	const SchemaEnvironment = new mongoose.Schema(
		{ key: String, value: String, description: String },
		{ collection: 'development' },
	);
	const Environment = mongoose.model('development', SchemaEnvironment);

	const mongoDB = mongoose.connection;
	mongoose.set('strictQuery', true);
	mongoose.connect(envDefault.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		connectTimeoutMS: 5000,
	});

	mongoDB.on('error', function () {
		console.log('Connection Failed!');
	});
	// 5. 연결 성공
	mongoDB.once('open', function () {
		console.log('Connected!');
	});

	Environment.find((err, data) => {
		console.log('Database err:', err);
		console.log('Database Courses:', data);
	});

	// throw new Error('sss');
})();
