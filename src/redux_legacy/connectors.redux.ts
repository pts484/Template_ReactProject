import GlobalStatus from '@/redux_legacy/reducers/GlobalStatus.reducer';

import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

import { persistReducer } from 'redux-persist'; // 추가
import storageSession from 'redux-persist/lib/storage/session';

const persistAccountConfig = {
	key: 'Account',
	storage: storageSession,
};

const rootReducer = combineReducers({
	GlobalStatus,
	// Account: persistReducer(persistAccountConfig, GlobalStatus),
	// Account,
	pender: penderReducer,
});

export default rootReducer;
