import React from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import Test from './Main.module.scss';

const Main = (): JSX.Element => {
	return (
		<motion.div
			className="container d-flex justify-content-between"
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
				animate={{ rotate: 360 }}
				transition={{
					ease: 'linear',
					duration: 4,
					repeat: Infinity,
					delay: 1,
				}}
			/>
			<motion.div
				className={cx(Test.test)}
				animate={{ rotate: 360 }}
				transition={{
					ease: 'linear',
					duration: 4,
					repeat: Infinity,
					delay: 1,
					repeatDelay: 1,
				}}
			/>
			<motion.div
				className={cx(Test.test)}
				style={{
					borderRadius: 30,
					backgroundColor: '#333',
					position: 'absolute',
				}}
				animate={{
					left: 10,
					top: 10,
					scale: 0.5,
					rotate: 45,
					backgroundColor: '#ffd700',
				}}
				transition={{
					ease: 'linear',
					duration: 3,
					repeat: Infinity,
					delay: 1,
					repeatDelay: 1,
				}}
			/>

			<motion.h5
				animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
				transition={{
					duration: 5,
					delay: 0.3,
					ease: [0.5, 0.71, 1, 1.5],
				}}
				initial={{ opacity: 0, scale: 0.5 }}
				whileHover={{ scale: 1.2 }}
			>
				Animation made easy with Framer Motion
			</motion.h5>
		</motion.div>
	);
};

export default Main;
