import React from 'react';
import cx from 'classnames';
import CSS from './ButtonTest00.module.scss';

const ButtonTest00 = (): JSX.Element => {
	return <button className={cx('button', [CSS.button])}>CSS Moudules Button 00</button>;
};

export default ButtonTest00;
