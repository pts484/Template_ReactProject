import React from 'react';
import Tooltip from '@/pages/_designsystems/components/Tooltip/index';

const DesignSystemTooltip: React.FC = (): JSX.Element => {
	return (
		<div className="container">
			<h1 className="mb-3">Tooltip</h1>
			<span className="subhead-long-03 gray-500">설명</span>
			<br />
			<br />
			<hr />
			<div className="col row row-cols-4">
				<div className="col">
					<Tooltip className="myclass" title={`툴팁 컴포넌트 입니다. 내용을 입력해 주십셩`}>
						Example Tooltip with Bootstrap5
					</Tooltip>
				</div>
				<div>
					<Tooltip
						className="myclass"
						html={true}
						customClass="balloon-box"
						title={`툴팁 컴포넌트 입니다. 내용을 입력해 주십셩`}
					>
						Example Tooltip with Bootstrap5
					</Tooltip>
				</div>
			</div>
		</div>
	);
};

export default DesignSystemTooltip;
