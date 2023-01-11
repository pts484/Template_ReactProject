import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DesignSystem from './pages/_designsystems/index';
import ListHookExample from './pages/ListHookExample/ListHookExample';
import Main from './pages/Main/Main';

const Routers = (): JSX.Element => {
	const location = useLocation();

	return (
		<Routes location={location}>
			<Route path="/" element={<Main />} />
			<Route path="/designsystem" element={<DesignSystem />} />
			<Route path="/listhook" element={<ListHookExample />} />
		</Routes>
	);
};

export default Routers;
