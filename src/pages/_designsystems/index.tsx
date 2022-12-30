import React, { useEffect } from 'react';
import LOGOS from '@/assets/logos';
import InputSelect from './components/InputSelect';
import InputView from './view/InputView';
import SearchBarView from './view/SearchBarView';
import MessageBoxView from './view/MessageBoxView';
import ToastView from './view/ToastView';
import { useDarkMode } from '@/styles/Theme/DarkModeContext';

const DesignSystem = (): JSX.Element => {
	return (
		<>
			<h3>현석 디자인시스템 구축 구간</h3>
			<InputView />
			<br />
			<br />
			<SearchBarView />
			<br />
			<br />
			<MessageBoxView />
			<br />
			<br />
			<ToastView />
		</>
	);
};

export default DesignSystem;
