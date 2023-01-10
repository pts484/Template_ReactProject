import '@include';
import React, { useEffect } from 'react';

import {
	_STATUS_ALL_,
	_LANGUAGE_,
	_MOBILE_,
	_PLATFORM_,
	_ORIENTATION_,
	_BREAKPOINT_,
} from '@/redux/reducers/GlobalStatus.reducer';

import { useDispatch, useSelector } from '@hooks/useStore/useStore.hook';
import { Link, Outlet, Router, useLocation } from 'react-router-dom';
import Routers from './routers';
import CSS from './App.module.scss';
import cx from 'classnames';

const App = (): JSX.Element => {
	const dispatch = useDispatch();
	const gStatus = useSelector((state) => state.GlobalStatus);
	const path = useLocation();

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
			{/* <button
				type="button"
				className="btn-filled-lg"
				onClick={() => {
					dispatch(_LANGUAGE_('ko-KR'));
				}}
			>
				ko-KR
			</button>
			<button
				type="button"
				className="btn-filled-md"
				onClick={() => {
					dispatch(_LANGUAGE_('en-US'));
				}}
			>
				en-US
			</button>
			<button
				type="button"
				className="btn-filled-xs"
				onClick={() => {
					dispatch(_LANGUAGE_('en-US'));
				}}
			>
				aaaaaaaaaa
			</button>

			<p> 컬러 </p>

			<button
				type="button"
				className="btn-filled-xs bg-white"
				onClick={() => {
					dispatch(_LANGUAGE_('en-US'));
				}}
			>
				aaaaaaaaaa
			</button> */}
			<header>
				<nav className={cx(CSS.gnb, 'container')}>
					<Link to="/">main</Link>
					<Link to="/designsystem">Design System</Link>
				</nav>
			</header>
			<Routers />
			<footer className="text-center my-5 py-2 bg-success">푸터</footer>
		</div>
	);
};

export default App;
