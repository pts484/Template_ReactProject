import '@include';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { detectedBreakpoint, isMobile, setLanguage } from '@/redux_legacy/reducers/GlobalStatus.reducer';

const App = (): JSX.Element => {
	const dispatch = useDispatch();
	const { server, language } = useSelector((store: RootState) => store.GlobalStatus);

	useEffect(() => {
		/**
		 * 화면 resize 및 모바일 플래그 여부
		 */
		let pass = 0;
		const detectBreakpoint = (): void => {
			if (++pass % 5 === 0) {
				dispatch(detectedBreakpoint());
				dispatch(isMobile());
			}
		};
		// window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
		window.addEventListener('resize', detectBreakpoint);

		return () => {
			window.removeEventListener('resize', () => {
				detectBreakpoint();
			});
		};
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<p>{language}</p>
				<button
					type="button"
					onClick={() => {
						console.log('ssss');
						dispatch(setLanguage('en-US'));
					}}
				>
					aaaaaaaaaa
				</button>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;
