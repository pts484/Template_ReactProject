import React from 'react';
import classNames from 'classnames';
import CSS from './ButtonTest00.module.scss';

const cx = classNames;

const ButtonTest00 = (): JSX.Element => {
	return <button className={cx('button', CSS.green_button)}>CSS Moudules Button 00</button>;
};

export default ButtonTest00;
