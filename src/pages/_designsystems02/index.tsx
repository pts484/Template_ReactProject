import React from 'react';

const DesignSystem02 = (): JSX.Element => {
	return (
		<>
			<div className="container">
				<h1>button</h1>
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
				{/* button Filled */}
				<div className="row row-cols-7 mb-3">
					<div className="col">filled</div>
					<div className="col">
						<button className="btn-filled-lg">btn-filled-lg</button>
					</div>
					<div className="col">
						<button className="btn-filled-md">btn-filled-md</button>
					</div>
					<div className="col">
						<button className="btn-filled-sm">btn-filled-sm</button>
					</div>
					<div className="col">
						<button className="btn-filled-xs">btn-filled-xs</button>
					</div>
					<div className="col">
						<button className="btn-filled-sqr">btn-filled-sqr</button>
					</div>
				</div>

				{/* button Line */}
				<div className="row row-cols-7 mb-3">
					<div className="col">line</div>
					<div className="col">
						<button className="btn-line-lg">btn-line-lg</button>
					</div>
					<div className="col">
						<button className="btn-line-md">btn-line-md</button>
					</div>
					<div className="col">
						<button className="btn-line-sm">btn-line-sm</button>
					</div>
					<div className="col">
						<button className="btn-line-xs">btn-line-xs</button>
					</div>
					<div className="col">
						<button className="btn-line-sqr">btn-line-sqr</button>
					</div>
				</div>

				{/* button Grayline */}
				<div className="row row-cols-7 mb-3">
					<div className="col">grayline</div>
					<div className="col">
						<button className="btn-grayline-lg">btn-grayline-lg</button>
					</div>
					<div className="col">
						<button className="btn-grayline-md">btn-grayline-md</button>
					</div>
					<div className="col">
						<button className="btn-grayline-sm">btn-grayline-sm</button>
					</div>
					<div className="col">
						<button className="btn-grayline-xs">btn-grayline-xs</button>
					</div>
					<div className="col">
						<button className="btn-grayline-sqr">btn-grayline-sqr</button>
					</div>
				</div>

				{/* button Hover */}
				<div className="row row-cols-7 mb-3">
					<div className="col">grayhover</div>
					<div className="col">
						<button className="btn-hover-lg">btn-hover-lg</button>
					</div>
					<div className="col">
						<button className="btn-hover-md">btn-hover-md</button>
					</div>
					<div className="col">
						<button className="btn-hover-sm">btn-hover-sm</button>
					</div>
					<div className="col">
						<button className="btn-hover-xs">btn-hover-xs</button>
					</div>
					<div className="col">
						<button className="btn-hover-sqr">btn-hover-sqr</button>
					</div>
				</div>

				{/* button grayfilled */}
				<div className="row row-cols-7 mb-3">
					<div className="col">grayfilled</div>
					<div className="col">
						<button className="btn-grayfilled-lg">btn-grayfilled-lg</button>
					</div>
					<div className="col">
						<button className="btn-grayfilled-md">btn-grayfilled-md</button>
					</div>
					<div className="col">
						<button className="btn-grayfilled-sm">btn-grayfilled-sm</button>
					</div>
					<div className="col">
						<button className="btn-grayfilled-xs">btn-grayfilled-xs</button>
					</div>
					<div className="col">
						<button className="btn-grayfilled-sqr">btn-grayfilled-sqr</button>
					</div>
				</div>
				{/* button disabled */}
				<div className="row row-cols-7 mb-3">
					<div className="col">disabled</div>
					<div className="col">
						<button className="btn-disabled-lg" disabled={true}>
							btn-disabled-lg
						</button>
					</div>
					<div className="col">
						<button className="btn-disabled-md" disabled={true}>
							btn-disabled-md
						</button>
					</div>
					<div className="col">
						<button className="btn-disabled-sm" disabled={true}>
							btn-disabled-sm
						</button>
					</div>
					<div className="col">
						<button className="btn-disabled-xs" disabled={true}>
							btn-disabled-xs
						</button>
					</div>
					<div className="col">
						<button className="btn-disabled-sqr" disabled={true}>
							btn-disabled-sqr
						</button>
					</div>
				</div>
				{/* button background none */}
				<div className="row row-cols-6 mb-3">
					<div className="col">Transparency-bg</div>
					<div className="col">
						<button className="btn-bg-none">버튼 투명</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default DesignSystem02;
