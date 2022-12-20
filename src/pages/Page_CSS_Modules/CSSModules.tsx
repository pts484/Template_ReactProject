import React from 'react';
import ButtonTest00 from './Components/ButtonTest00/ButtonTest00';
import ButtonTest01 from './Components/ButtonTest01/ButtonTest01';
import ButtonTest02 from './Components/ButtonTest02/ButtonTest02';
import CSS from './CSSModules.module.scss';
import cx from 'classnames';

const CSSModules = (): JSX.Element => {
	return (
		<div className="button-wrap">
			<ButtonTest00 />
			<ButtonTest01 />
			<ButtonTest02 />
			<button type="button" className={cx('btn-filled-sm', CSS['btn-filled-sm'])}>
				ko-KR
			</button>
		</div>
	);
};

export default CSSModules;
