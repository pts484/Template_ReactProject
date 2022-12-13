import React, { useEffect } from 'react';

import {
	_STATUS_ALL_,
	_LANGUAGE_,
	_MOBILE_,
	_PLATFORM_,
	_ORIENTATION_,
	_BREAKPOINT_,
} from '@/redux/reducers/GlobalStatus.reducer';

import { useDispatch, useSelector } from '@hook/useStore/useStore.hook';

const TestComponent = (): JSX.Element => {
	const dispatch = useDispatch();
	const gStatus = useSelector((state) => state.GlobalStatus);

	useEffect(() => {
		/**
		 * 화면 앵글 및 상태 (가로모드, 세로모드) 여부
		 */
		window.addEventListener('orientationchange', (): void => {
			dispatch(_ORIENTATION_());
		});

		/**
		 * 화면 resize 및 모바일 플래그  여부
		 */
		window.addEventListener('resize', (): void => {
			dispatch(_STATUS_ALL_(5));
		});

		/**
		 * 이밴트 핸들러 모두 캔슬
		 */
		return () => {
			window.removeEventListener('resize', () => {
				console.log('disabled _STATUS_ALL_');
			});
			window.addEventListener('orientationchange', (): void => {
				console.log('disabled _ORIENTATION_');
			});
		};
	}, []);

	return (
		<div className="App">
			<br />
			{gStatus.breakpoint}
			<br />
			{gStatus.language}
			<br />
			{gStatus.languageBrowser}
			<br />
			{gStatus.mobile ? 'mobile' : 'desktop'}
			<br />
			{JSON.stringify(gStatus.orientation)}
			<br />
			{gStatus.platform}
			<button
				type="button"
				onClick={() => {
					dispatch(_LANGUAGE_('en-US'));
				}}
			>
				aaaaaaaaaa
			</button>
			<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
				Learn React
			</a>
		</div>
	);
};

export default TestComponent;
