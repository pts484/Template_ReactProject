import React, { useEffect } from 'react';

import Button from './view/Button';
import Tooltip from './view/Tooltip';
import Selections from './view/Selections';
import ModalLayout from './view/ModalLayout';
import Select from './view/Select';

// 분리 작업한 import 내용

import InputView from './view/InputView';
import SearchBarView from './view/SearchBarView';
import MessageBoxView from './view/MessageBoxView';
import ToastView from './view/ToastView';
import { useDarkMode } from '@/styles/Theme/DarkModeContext';

const DesignSystem = (): JSX.Element => {
	return (
		<>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<Select />
				</div>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<Button />
				</div>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<Tooltip />
				</div>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<Selections />
				</div>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<ModalLayout />
				</div>
			</div>
			<br />
			<br />
			<InputView />
			<br />
			<br />
			<br />
			<br />
			<SearchBarView />
			<br />
			<br />
			<br />
			<br />
			<MessageBoxView />
			<br />
			<br />
			<br />
			<br />
			<ToastView />
		</>
	);
};

export default DesignSystem;
