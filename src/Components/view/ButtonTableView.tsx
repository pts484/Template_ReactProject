import React from 'react';
import ICONS from '@/styles/icons';
import LOGOS from '@/styles/logos';
import Button from '@/Components/components/Button/index';

const ButtonTableView = () => (
	<div className="container">
		<h1>Button</h1>
		<span className="subhead-long-03 gray-500">
			피그마에서 버튼 type, size 확인 후 지정 된 className 복붙해서 사용하시면 됩니다~
		</span>
		<br />
		<br />
		<br />
		<hr />
		<br />
		{/* Header */}
		<div className="row row-cols-7 mb-3">
			<div className="col">
				<span className="subhead-02"></span>
			</div>
			<div className="col">
				<span className="subhead-02">lg</span>
			</div>
			<div className="col">
				<span className="subhead-02">md</span>
			</div>
			<div className="col">
				<span className="subhead-02">sm</span>
			</div>
			<div className="col">
				<span className="subhead-02">xs</span>
			</div>
			<div className="col">
				<span className="subhead-02">sqr</span>
			</div>
		</div>
		{/* Button Filled */}
		<div className="row row-cols-7 mb-3">
			<div className="col">filled</div>
			<div className="col">
				<Button className="btn-filled-lg">btn-filled-lg</Button>
			</div>
			<div className="col">
				<Button className="btn-filled-md">btn-filled-md</Button>
			</div>
			<div className="col">
				<Button className="btn-filled-sm">btn-filled-sm</Button>
			</div>
			<div className="col">
				<Button className="btn-filled-xs">btn-filled-xs</Button>
			</div>
			<div className="col">
				<Button className="btn-filled-sqr">btn-filled-sqr</Button>
			</div>
			<div className="row row-cols-7 mb-3">
				<br />
			</div>
		</div>

		{/* Button Line */}
		<div className="row row-cols-7 mb-3">
			<div className="col">line</div>
			<div className="col">
				<Button className="btn-line-lg">btn-line-lg</Button>
			</div>
			<div className="col">
				<Button className="btn-line-md">btn-line-md</Button>
			</div>
			<div className="col">
				<Button className="btn-line-sm">btn-line-sm</Button>
			</div>
			<div className="col">
				<Button className="btn-line-xs">btn-line-xs</Button>
			</div>
			<div className="col">
				<Button className="btn-line-sqr">btn-line-sqr</Button>
			</div>
		</div>
		<div className="row row-cols-7 mb-3">
			<br />
		</div>

		{/* Button Grayline */}
		<div className="row row-cols-7 mb-3">
			<div className="col">grayline</div>
			<div className="col">
				<Button className="btn-grayline-lg">btn-grayline-lg</Button>
			</div>
			<div className="col">
				<Button className="btn-grayline-md">btn-grayline-md</Button>
			</div>
			<div className="col">
				<Button className="btn-grayline-sm">btn-grayline-sm</Button>
			</div>
			<div className="col">
				<Button className="btn-grayline-xs">btn-grayline-xs</Button>
			</div>
			<div className="col">
				<Button className="btn-grayline-sqr">btn-grayline-sqr</Button>
			</div>
		</div>
		<div className="row row-cols-7 mb-3">
			<br />
		</div>

		{/* Button Hover */}
		<div className="row row-cols-7 mb-3">
			<div className="col">grayhover</div>
			<div className="col">
				<Button className="btn-hover-lg">btn-hover-lg</Button>
			</div>
			<div className="col">
				<Button className="btn-hover-md">btn-hover-md</Button>
			</div>
			<div className="col">
				<Button className="btn-hover-sm">btn-hover-sm</Button>
			</div>
			<div className="col">
				<Button className="btn-hover-xs">btn-hover-xs</Button>
			</div>
			<div className="col">
				<Button className="btn-hover-sqr">btn-hover-sqr</Button>
			</div>
		</div>
		<div className="row row-cols-7 mb-3">
			<br />
		</div>

		{/* Button grayfilled */}
		<div className="row row-cols-7 mb-3">
			<div className="col">grayfilled</div>
			<div className="col">
				<Button className="btn-grayfilled-lg">btn-grayfilled-lg</Button>
			</div>
			<div className="col">
				<Button className="btn-grayfilled-md">btn-grayfilled-md</Button>
			</div>
			<div className="col">
				<Button className="btn-grayfilled-sm">btn-grayfilled-sm</Button>
			</div>
			<div className="col">
				<Button className="btn-grayfilled-xs">btn-grayfilled-xs</Button>
			</div>
			<div className="col">
				<Button className="btn-grayfilled-sqr">btn-grayfilled-sqr</Button>
			</div>
			<div className="row row-cols-7 mb-3">
				<br />
			</div>
		</div>
		{/* Button disabled */}
		<div className="row row-cols-7 mb-3">
			<div className="col">disabled</div>
			<div className="col">
				<Button className="btn-disabled-lg" disabled={true}>
					btn-disabled-lg
				</Button>
			</div>
			<div className="col">
				<Button className="btn-disabled-md" disabled={true}>
					btn-disabled-md
				</Button>
			</div>
			<div className="col">
				<Button className="btn-disabled-sm" disabled={true}>
					btn-disabled-sm
				</Button>
			</div>
			<div className="col">
				<Button className="btn-disabled-xs" disabled={true}>
					btn-disabled-xs
				</Button>
			</div>
			<div className="col">
				<Button className="btn-disabled-sqr" disabled={true}>
					btn-disabled-sqr
				</Button>
			</div>
			<div className="row row-cols-7 mb-3">
				<br />
			</div>
		</div>
		{/* Button background none */}
		<div className="row row-cols-6 mb-3">
			<div className="col">Transparency-bg</div>
			<div className="col">
				<Button className="btn-bg-none">버튼 투명</Button>
			</div>
			<div className="row row-cols-7 mb-3">
				<br />
			</div>
		</div>
	</div>
);
export default ButtonTableView;
