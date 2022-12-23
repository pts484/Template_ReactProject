import React, { useEffect, useState } from 'react';

import Badges from './view/Badges';
import ButtonTable from './logic/ButtonTable';
import MessageBox from './view/MessageBox';
import ModalLayout from './view/ModalLayout';
import Toast from './view/Toast';
import Selections from './view/Selections';
// import Select from './view/Select';
import SearchBar from './view/SearchBar';
import ColorsTable from './logic/ColorsTable';
import Icons from './logic/Icons';
// import Input from './logic/Input';
import Tooltip from './view/Tooltip';

const Designsystem: React.FC<any> = (): JSX.Element => {
	return (
		<>
			<div className="mt-5 pb-5">-</div>
			<div className="container">
				<div className="mt-5">
					<span>
						<span></span>
					</span>
				</div>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">{/* <Input /> */}</div>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<SearchBar />
				</div>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<Tooltip />
				</div>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<ButtonTable />
				</div>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">{/* <Select /> */}</div>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<Selections />
				</div>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<Toast />
				</div>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<MessageBox />
				</div>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<ModalLayout />
				</div>
			</div>
			<div className="container">
				<div className="mt-5">
					<Badges />
				</div>
			</div>
			<div className="container ">
				<div className="mt-5">
					<ColorsTable />
				</div>
				<br />
				<br />
				<span>더 이상 추가 색상은 생략한다</span>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<Icons />
				</div>
			</div>
		</>
	);
};

export default Designsystem;
