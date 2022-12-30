import React from 'react';

import Select from '../components/Select/Select';

import LOGOS from '@assets/logos';
import ICONS from '@assets/icons';
const SelectBtn = () => (
	<div className="container">
		<h1>Select</h1>
		<span className="subhead-long-03 gray-500">
			- width 값은 각 스크린 디자인에 맞게 해당 div에 100% 차도록 세팅됨.
			<br />- 상태는 default와 disabled 만 세팅돼있습니다.
		</span>
		<br />
		<br />
		<hr />
		<div className="mb-3">
			<span className="">select-default</span>
			<Select
				selects={[
					{ icon: <LOGOS.klayImg />, name: 'KLAY', value: 'klay' },
					{ icon: <LOGOS.perImg />, name: 'PER', value: 'per' },
					{ icon: <LOGOS.ethereumImg />, name: 'ETH', value: 'ethereum' },
					{ icon: <LOGOS.ethereumImg />, name: 'ETH', value: 'ethereum' },
				]}
			/>
			<span>select-disabled</span>
			<Select
				disabled
				selects={[
					{ icon: <LOGOS.klayImg />, name: 'KLAY', value: 'klay' },
					{ icon: <LOGOS.perImg />, name: 'PER', value: 'per' },
					{ icon: <LOGOS.ethereumImg />, name: 'ETH', value: 'ethereum' },
					{ icon: <LOGOS.ethereumImg />, name: 'ETH', value: 'ethereum' },
				]}
			/>
		</div>
	</div>
);

export default SelectBtn;
