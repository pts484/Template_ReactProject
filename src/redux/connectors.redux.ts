import { combineReducers } from '@reduxjs/toolkit';

import GlobalStatus from '@redux/reducers/GlobalStatus.reducer';

const rootReducer = combineReducers({
	GlobalStatus,
});

export default rootReducer;
