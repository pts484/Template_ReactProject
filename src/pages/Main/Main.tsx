import React from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import Test from './Main.module.scss';

const Main = (): JSX.Element => {
	return (
		<motion.div
			className="container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<motion.div
				className={cx(Test.test)}
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 1.5 }}
			/>
			<motion.div
				className={cx(Test.test)}
				initial={{ y: 100 }}
				animate={{ y: 0 }}
				transition={{ duration: 1.5 }}
			/>
			<motion.div
				className={cx(Test.test)}
				initial={{ x: 200 }}
				animate={{ x: -200 }}
				transition={{ duration: 5, repeat: Infinity }}
			/>
			<motion.div
				className={cx(Test.test)}
				initial={{ x: -100 }}
				animate={{ x: 0 }}
				transition={{ duration: 1.5 }}
			/>
		</motion.div>
	);
};

export default Main;
