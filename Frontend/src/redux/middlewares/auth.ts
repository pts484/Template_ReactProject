const userConnectionCheck =
	(store): any =>
	(next): any =>
	(action): any => {
		// axios.defaults.timeout = 5000;
		// axios.defaults.withCredentials = true;

		const currentState = store.getState();
		if (action.type.indexOf('UPDATE/NODE') === 0 || action.type.indexOf('@@redux-pender') === 0) {
			// ...something
		}

		return next(action);
		// let nextState = next(action);
		// //console.log(nextState);
		// return nextState;
	};

export default userConnectionCheck;
