import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';
import mwPender from 'redux-pender';
import rootReducer from './connectors.redux'; // 비동기를 위한 라이브러리

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

// 개발 모드일 때만 Redux Devtools 적용
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(
			thunk,
			mwPender(),
			// logger,
			// MWs.authentication
			// ...add middleware
		),
	),
);

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
