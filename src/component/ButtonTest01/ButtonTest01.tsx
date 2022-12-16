import React from 'react';
import classNames from 'classnames';
import CSS from './ButtonTest01.module.scss';

const cx = classNames;

const ButtonTest01 = (): JSX.Element => {
	return <button className={cx('button', CSS.blue_button)}>CSS Moudules Button 01</button>;
};

export default ButtonTest01;
