import React from 'react';
import ICONS from '@/styles/icons';
import LOGOS from '@/styles/logos';

import Tooltip from '@/Components/components/Tooltip/index';

const Tooltip_ = () => (
	<div className="container">
		<h1 className="mb-3">Tooltip</h1>
		<span className="subhead-long-03 gray-500">설명</span>
		<br />
		<br />
		<hr />
		{/* Header */}
		<div className="col row row-cols-4">
			<div className="col">
				<Tooltip
					className="myclass"
					title={`더 세밀한 정렬을 원하시면 지불수단 정렬을 1개 선택한 후 확인해주세요.`}
				>
					Example Tooltip with Bootstrap5
				</Tooltip>
			</div>
			<div>
				<Tooltip
					className="myclass"
					html={true}
					customClass="balloon-box"
					title={`<div>더 세밀한 정렬을 원하시면 지불수단정렬을 1개 선택한 후 확인해주세요.</div>`}
				>
					Example Tooltip with Bootstrap5
				</Tooltip>
			</div>
		</div>
	</div>
);

export default Tooltip_;
