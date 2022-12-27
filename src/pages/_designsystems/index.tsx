import React from 'react';
import cx from 'classnames';
import CSS from './index.module.scss';

const DesignSystem = (): JSX.Element => {
	return (
		<>
			<section className={cx(CSS.designsystem_sec)}>
				<h3>Input</h3>
				<p>Input</p>
				<hr />
				<div className="row"></div>
			</section>
		</>
	);
};

export default DesignSystem;
