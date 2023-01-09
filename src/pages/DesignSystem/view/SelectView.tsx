import React from 'react';
import Select from '../../../components/Select/Select';
import LOGOS from '@assets/logos';

const SelectBtn = () => (
	<div className="container">
		<h1>Select</h1>
		<br />
		<p className="subhead-long-03 gray-500">
			﹗ Select는 div가 Container 된 상태로 제작 된 컴포넌트입니다.
			<br />
			﹗기본 운용 태그 :<code style={{ color: '#33bba0', fontWeight: 'bold' }}>{` <Select/> `}</code>
			<br />
			﹗disabled 상태로 변경 방법 :<code style={{ color: '#33bba0', fontWeight: 'bold' }}>{` <Select/>`}</code> 에
			props로
			<code style={{ color: '#4ebbf1', fontWeight: 'bold' }}> focus</code>를 추가.
			<br />
			﹗placeholder, defaultValue :<code
				style={{ color: '#33bba0', fontWeight: 'bold' }}
			>{` <SearchBar/>`}</code>{' '}
			에 props로
			<code style={{ color: '#4ebbf1', fontWeight: 'bold' }}> placeholder, defaultValue</code> 를 입력 후 문자열
			입력.
		</p>
		<br />
		<hr />
		<br />
		<div className="mb-3">
			<span className="">select-default</span>
			<Select
				selects={[
					{ icon: <LOGOS.klayImg />, name: 'KLAY', value: 'klay' },
					{ icon: <LOGOS.perImg />, name: 'PER', value: 'per' },
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
				]}
			/>
		</div>
	</div>
);

export default SelectBtn;
