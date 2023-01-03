import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DesignSystem from './pages/_designsystems/index';
import Main from './pages/Main/Main';
import { YJPage } from './pages/YJPage/YJPage';
import EventModal from './pages/YJPage/EventModal';

const Routers = (): JSX.Element => {
	const location = useLocation();

	return (
		<Routes location={location}>
			<Route path="/" element={<Main />} />
			<Route path="/designsystem" element={<DesignSystem />} />
			<Route path="/yjpage" element={<YJPage />} />
			<Route path="/event-modal" element={<EventModal />} />
		</Routes>
	);
};

export default Routers;
