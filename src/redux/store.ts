import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './connectors.redux'; // 비동기를 위한 라이브러리

const Store = configureStore({
	/**
	 * 리듀서들
	 */
	reducer: rootReducer,

	/**
	 * 미들웨어들
	 * helper : https://redux-toolkit.js.org/usage/usage-with-typescript
	 */
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().prepend(
			// correctly typed middlewares can just be used
			[],
			// you can also type middlewares manually
			// untypedMiddleware as Middleware<(action: Action<'specialAction'>) => number, RootState>,
		),
	// prepend and concat calls can be chained
	// .concat(logger),

	devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export { Store };
