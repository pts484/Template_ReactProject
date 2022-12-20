import React from 'react';
import cx from 'classnames';
import CSS from './ButtonTest01.module.scss';

const ButtonTest01 = (): JSX.Element => {
	return <button className={cx('button', CSS.button)}>CSS Moudules Button 01</button>;
};

export default ButtonTest01;
