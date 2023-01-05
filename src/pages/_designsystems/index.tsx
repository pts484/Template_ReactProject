import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import Button from './view/Button';
import Tooltip from './view/Tooltip';
import SelectionsView from './view/SelectionsView';
import ModalLayout from './view/ModalLayout';
import SelectView from './view/SelectView';

// 분리 작업한 import 내용

import InputView from './view/InputView';
import SearchBarView from './view/SearchBarView';
import MessageBoxView from './view/MessageBoxView';
import ToastView from './view/ToastView';
import ModalView from './view/ModalView';
import DropMenuView from './view/DropMenuView';
import ButtonView from './view/ButtonView';

const DesignSystem = (): JSX.Element => {
	return (
		<motion.div
			className="container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<ButtonView />
			<br />
			<br />
			<br />
			<br />
			<DropMenuView />
			<br />
			<br />
			<br />
			<br />
			<InputView />
			<br />
			<br />
			<br />
			<br />
			<MessageBoxView />
			<br />
			<br />
			<br />
			<br />
			<ModalView />
			<br />
			<br />
			<br />
			<br />
			<SearchBarView />
			<br />
			<br />
			<br />
			<br />
			<SelectView />
			{/* <ModalLayout /> */}
			<br />
			<br />
			<br />
			<br />
			<SelectionsView />
			<br />
			<br />
			<br />
			<br />
			<ToastView />
			<br />
			<br />
			<br />
			<br />
			<Tooltip />
			<br />
			<br />
			<br />
			<br />
		</motion.div>
	);
};

export default DesignSystem;
