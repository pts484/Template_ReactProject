import React from 'react';

import Button from './view/Button';
import Tooltip from './view/Tooltip';
import Selections from './view/Selections';
import ModalLayout from './view/ModalLayout';

const DesignSystem02 = (): JSX.Element => {
	return (
		<>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<Button />
				</div>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<Tooltip />
				</div>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<Selections />
				</div>
			</div>
			<div className="container mt-5 pb-5">
				<div className="mt-5">
					<ModalLayout />
				</div>
			</div>
		</>
	);
};

export default DesignSystem02;
