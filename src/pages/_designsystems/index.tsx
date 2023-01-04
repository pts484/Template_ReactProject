import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

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
import Modal from './view/Modal';
import DropMenuView from './view/DropMenuView';

const DesignSystem = (): JSX.Element => {
	return (
		<motion.div
			className="container"
			initial={{ opacity: 0, x: '100vw' }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 1 }}
		>
			<Select />
			<br />
			<br />
			<br />
			<br />
			<Button />
			<br />
			<br />
			<br />
			<br />
			<Tooltip />
			<br />
			<br />
			<br />
			<br />
			<Selections />
			<br />
			<br />
			<br />
			<br />
			<ModalLayout />
			<br />
			<br />
			<br />
			<br />
			<Modal />
			<br />
			<br />
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
			<br />
			<br />
			<br />
			<br />
			<DropMenuView />
			<br />
			<br />
			<br />
			<br />
		</motion.div>
	);
};

export default DesignSystem;
