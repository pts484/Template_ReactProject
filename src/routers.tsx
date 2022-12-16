import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Page01 from './pages/Page01';
import Page02 from './pages/Page02';
import { CSSTransition, TransitionGroup, Transition, SwitchTransition } from 'react-transition-group';
import './styles/transition.scss';
/**
 *  react-transition-group 라이브러리 사용 테스트.
 *  <CSSTransition/> 에서 useLocation() 으로 할당 받은 pathname 값을 활용함.
 *
 *  치명적일수도 있는 문제...
 *  - 라우터 경로에 있는 페이지들은 position : absolute; 상태여야만
 *    자연스러운 CSS 효과가 부여 됨. (relative는 <TrainsitionGroup/> 이 갖고있음)
 *  - 그로 인해 컴포넌트 하나가 부유되는 상태가 되기 때문에 블록 단위로 구성되는
 *    프론트
 *
 */

const Routers = (): JSX.Element => {
	const location = useLocation();
	console.log(location);

	return (
		<TransitionGroup className="transition-group">
			<CSSTransition key={location.pathname} in={true} timeout={300} classNames={'fade'}>
				<Routes location={location}>
					<Route path="/" element={<Main />} />
					<Route path="/page01" element={<Page01 />} />
					<Route path="/page02" element={<Page02 />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default Routers;
