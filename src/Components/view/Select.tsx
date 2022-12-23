import React from 'react';
import ICONS from '@/styles/icons';
import LOGOS from '@/styles/logos';

import SelectInput from '../components/Input/Select';

const Select = () => (
	<div className="container">
		<h1>Select</h1>
		<span className="subhead-long-03 gray-500">
			width 값은 각 스크린 디자인에 맞게 해당 div에 100% 차도록 세팅됨.
			<br /> * btn svg 커스텀 진행중!
		</span>
		<br />
		<br />
		<br />
		<hr />
		<br />
		{/* *********** select-default ************ */}
		<div className="mb-3">
			<span className="text-700">select-default</span>

			<SelectInput
				// className="select-filled-default-btn "
				selects={[
					{ icon: <LOGOS.klayImg />, name: 'KLAY', value: 'klay' },
					{ icon: <LOGOS.perImg />, name: 'PER', value: 'per' },
					{ icon: <LOGOS.ethereumImg />, name: 'ETH', value: 'ethereum' },
					{ icon: <LOGOS.ethereumImg />, name: 'ETH', value: 'ethereum' },
				]}
				onValue={(value) => console.log(value)}
			/>

			<br />
			<div className="select-default">
				<button
					className="select-default-btn"
					type="button"
					id=""
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<ICONS.clock /> <span>버튼</span>
				</button>
				<ul className="select-dropdown dropdown-menu dropdown-menu-end">
					<li>
						<a className="dropdown-item" href="#">
							<LOGOS.klayImg />
							1일
						</a>
					</li>
					<li className="dropdown-item">
						<LOGOS.klay />
						<span>2일</span>
					</li>
					<li className="dropdown-item">3일</li>
					<li className="dropdown-item">4일</li>
				</ul>
			</div>
		</div>

		{/* ************ select-filled *********** */}
		<div className="mb-3">
			<span className="text-700">select-filled</span>

			<div className={'select-default'}>
				<button
					className="select-filled-default-btn "
					type="button"
					id=""
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<ICONS.clock /> <span>버튼</span>
				</button>
				<ul className="select-dropdown dropdown-menu w-100">
					<li>
						<a className="dropdown-item">
							<LOGOS.klayImg />
							1일
						</a>
					</li>
					<li>
						<a className="dropdown-item">3일</a>
					</li>
					<li>
						<a className="dropdown-item">1주</a>
					</li>
					<li>
						<a className="dropdown-item">1개월</a>
					</li>
					<li>
						<a className="dropdown-item">3개월</a>
					</li>
					<li>
						<a className="dropdown-item">6개월</a>
					</li>
				</ul>
			</div>
		</div>
		{/* ************ select disabled *********** */}
		<div className="mb-3">
			<span className="text-700">disabled (스타일 수정 중)</span>
			<div className={'select-default'}>
				<button
					className="select-disabled-btn disabled"
					type="button"
					id=""
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<ICONS.clock /> <span>버튼</span>
				</button>
				<ul className="select-dropdown dropdown-menu dropdown-menu-end">
					<li>
						<a className="dropdown-item" href="#">
							<LOGOS.klayImg />
							1일
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							3일
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							1주
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							1개월
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							3개월
						</a>
					</li>
					<li className="dropdown-item">
						<LOGOS.klay />
						<span>2일</span>
					</li>
					<li className="dropdown-item">3일</li>
					<li className="dropdown-item">4일</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Select;
