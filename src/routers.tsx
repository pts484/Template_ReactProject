import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DesignSystem from './pages/_designsystems/index';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';

const Routers = (): JSX.Element => {
	const location = useLocation();

	return (
		<Routes location={location}>
			<Route path="/" element={<Main />} />
			<Route path="/designsystem" element={<DesignSystem />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default Routers;
