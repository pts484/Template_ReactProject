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
			<section>
				<nav className="gnb">
					<Link to="/">Main</Link>
					<Link to="/page01">Transition1</Link>
					<Link to="/page02">Transition2</Link>
					<Link to="/tailwind">Tailwind</Link>
					<Link to="/cssmodules">CSS Modules</Link>
				</nav>
			</section>
			<Routers />

			<footer className="text-center py-3 bg-lime-300">
				<code>position:absolute;</code>를 가진 section에 따라 위 아래로 이동하는 <code>Footer</code>
			</footer>
		</div>
	);
};

export default App;
