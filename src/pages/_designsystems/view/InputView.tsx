import React from 'react';
import LOGOS from '@/assets/logos';
import InputSelect from '../components/InputSelect';

const InputView = (): JSX.Element => {
	return (
		<>
			<div className="container">
				<h1>Input</h1>
				<span className="subhead-long-03 gray-500">
					﹗ input은 <code className="mx-3">width: 100%; padding: 0.75rem 1rem;</code>을 기본적으로 포함하고
					있습니다.
					<br />﹗ default 값을 기준으로 각 상태에 따라 어떤식으로 적용되는지 표현되는 것을 나열한 내용입니다.
				</span>
				<br />
				<br />
				<br />
				<hr />
				<br />

				{/* default - header */}
				<ul className="row mb-3">
					<li className="col-1"></li>
					<li className="col text-start">
						<span className="subhead-02">default</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">focus</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">filled(value)</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">readonly</span>
					</li>
				</ul>
				{/* default - single input */}
				<ul className="row mb-3">
					<li className="col-1 d-flex justify-content-center align-items-center text-center">single input</li>
					<li className="col w-100">
						<input className="cic-input-default" placeholder="cic-input-default" />
					</li>
					<li className="col w-100">
						<input className="cic-input-default-focus" placeholder="cic-input-default" />
					</li>
					<li className="col w-100">
						<input className="cic-input-default-filled" defaultValue="cic-input-default" />
					</li>
					<li className="col w-100">
						<input className="cic-input-default-read-only" placeholder="cic-input-default" readOnly />
					</li>
				</ul>

				{/* success - header */}
				<ul className="row mb-3">
					<li className="col-1"></li>
					<li className="col text-start">
						<span className="subhead-02">success - default</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">success - focus</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">success - filled(value)</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">success - readonly</span>
					</li>
				</ul>
				{/* success - single input */}
				<ul className="row mb-3">
					<li className="col-1"></li>
					<li className="col w-100">
						<input className="cic-input-success" placeholder="cic-input-success" />
					</li>
					<li className="col w-100">
						<input className="cic-input-success-focus" placeholder="cic-input-success" />
					</li>
					<li className="col w-100">
						<input className="cic-input-success-filled" defaultValue="cic-input-success" />
					</li>
					<li className="col w-100">
						<input className="cic-input-success-read-only" placeholder="cic-input-success" readOnly />
					</li>
				</ul>

				{/* error - header */}
				<ul className="row mb-3">
					<li className="col-1"></li>
					<li className="col text-start">
						<span className="subhead-02">error - default</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">error - focus</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">error - filled(value)</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">error - readonly</span>
					</li>
				</ul>
				{/* error - single input */}
				<ul className="row mb-3">
					<li className="col-1"></li>
					<li className="col w-100">
						<input className="cic-input-error" placeholder="cic-input-error" />
					</li>
					<li className="col w-100">
						<input className="cic-input-error-focus" placeholder="cic-input-error" />
					</li>
					<li className="col w-100">
						<input className="cic-input-error-filled" defaultValue="cic-input-error" />
					</li>
					<li className="col w-100">
						<input className="cic-input-error-read-only" placeholder="cic-input-error" readOnly />
					</li>
				</ul>
				<br />
				<hr />
				<br />
				{/* header */}
				<div className="row mb-3">
					<div className="col-1"></div>
					<div className="col-5">
						<span className="subhead-02">default</span>
					</div>
					<div className="col-5">
						<span className="subhead-02">readonly</span>
					</div>
				</div>
				{/* input / select */}
				<div className="row mb-3">
					<div className="col-1 d-flex justify-content-center align-items-center text-center">
						input / select
					</div>
					<div className="col-5">
						<InputSelect
							// readOnly
							selects={[
								{ icon: <LOGOS.klayImg width="20" />, name: 'KLAY', value: 'klay' },
								{ icon: <LOGOS.perImg width="20" />, name: 'PER', value: 'per' },
								{ icon: <LOGOS.ethereumImg width="20" />, name: 'ethereum', value: 'ethereum' },
							]}
						/>
					</div>
					<div className="col-5">
						<InputSelect
							readOnly
							selects={[
								{ icon: <LOGOS.klayImg width="20" />, name: 'KLAY', value: 'klay' },
								{ icon: <LOGOS.perImg width="20" />, name: 'PER', value: 'per' },
								{ icon: <LOGOS.ethereumImg width="20" />, name: 'ethereum', value: 'ethereum' },
							]}
						/>
					</div>
				</div>
				<br />
				<hr />
				<br />
				{/* input 3 */}
				<div className="row mb-3">
					<div className="col-1 d-flex justify-content-center align-items-center text-center">
						two input / select
					</div>
					<div className="col w-100">
						<input className="cic-input-default" placeholder="cic-input-default" />
					</div>
				</div>
			</div>
		</>
	);
};

export default InputView;
