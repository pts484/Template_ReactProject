import ICONS from '@/styles/icons';
import React from 'react';

const Badges = () => (
	<div className="container">
		<h1>Badges</h1>
		<span className="subhead-long-03 gray-500">설명</span>
		<br />
		<br />
		<hr />
		{/* Header */}
		<div className={'badge-verified'}></div>
		<ICONS.verified className="pu-400" />
	</div>
);
export default Badges;
