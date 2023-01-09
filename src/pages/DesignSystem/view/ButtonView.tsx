import React, { useState } from 'react';
import Button from '../../../components/Button/Button';

const ButtonView = () => {
	return (
		<>
			<div className="container">
				<h1>Button</h1>
				<br />
				<p className="subhead-long-03 gray-500">
					﹗ Button은 button 단일태그로 구성되어 있습니다.
					<br />
					﹗기본 운용 방식은{' '}
					<code style={{ color: '#33bba0', fontWeight: 'bold' }}>{`<Button></Button>`}</code> 입니다.
					<br />
					﹗스타일 변경 방법
					<br />
					﹗ 첫번째 : className에 버튼명으로 된 클래스 사용.
					<br />﹗ 두번째 : <code style={{ color: '#33bba0', fontWeight: 'bold' }}>{`<Button>`}</code> 에
					props로 <code style={{ color: '#4ebbf1', fontWeight: 'bold' }}>style, size, disabled</code> 를
					순서에 상관없이 전달 해 주면 됩니다.
					<br />
				</p>
				<br />
				<hr />
				{/* message box - header */}
				<ul className="row mb-3">
					<li className="col-1"></li>
					<li className="col text-start">
						<span className="subhead-02">{`size="lg"`}</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">{`size="md"`}</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">{`size="sm"`}</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">{`size="xs"`}</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">{`size="sqr"`}</span>
					</li>
				</ul>

				{/* button - filled */}
				<ul className="row mb-3">
					<li className="col-1 d-flex justify-content-center align-items-center text-center">{`style="filled"`}</li>
					<li className="col">
						<Button style="filled" size="lg" className=" d-grid">
							btn-filled-lg
						</Button>
					</li>
					<li className="col">
						<Button style="filled" size="md">
							btn-filled-md
						</Button>
					</li>
					<li className="col">
						<Button style="filled" size="sm">
							btn-filled-sm
						</Button>
					</li>
					<li className="col">
						<Button style="filled" size="xs">
							btn-filled-xs
						</Button>
					</li>
					<li className="col">
						<Button style="filled" size="sqr">
							sqr
						</Button>
					</li>
				</ul>
				{/* button - line */}
				<ul className="row mb-3">
					<li className="col-1 d-flex justify-content-center align-items-center text-center">{`style="line"`}</li>
					<li className="col">
						<Button style="line" size="lg">
							btn-line-lg
						</Button>
					</li>
					<li className="col">
						<Button style="line" size="md">
							btn-line-md
						</Button>
					</li>
					<li className="col my-0">
						<Button style="line" size="sm">
							btn-line-sm
						</Button>
					</li>
					<li className="col">
						<Button style="line" size="xs">
							btn-line-xs
						</Button>
					</li>
					<li className="col">
						<Button style="line" size="sqr">
							sqr
						</Button>
					</li>
				</ul>
				{/* button - grayline */}
				<ul className="row mb-3">
					<li className="col-1 d-flex justify-content-center align-items-center text-center">{`style="grayline"`}</li>
					<li className="col">
						<Button style="grayline" size="lg">
							btn-grayline-lg
						</Button>
					</li>
					<li className="col">
						<Button style="grayline" size="md">
							btn-grayline-md
						</Button>
					</li>
					<li className="col">
						<Button style="grayline" size="sm">
							btn-grayline-sm
						</Button>
					</li>
					<li className="col">
						<Button style="grayline" size="xs">
							btn-grayline-xs
						</Button>
					</li>
					<li className="col">
						<Button style="grayline" size="sqr">
							sqr
						</Button>
					</li>
				</ul>

				{/* button - hover */}
				<ul className="row mb-3">
					<li className="col-1 d-flex justify-content-center align-items-center text-center">{`style="hover"`}</li>
					<li className="col">
						<Button style="hover" size="lg">
							btn-hover-lg
						</Button>
					</li>
					<li className="col">
						<Button style="hover" size="md">
							btn-hover-md
						</Button>
					</li>
					<li className="col">
						<Button style="hover" size="sm">
							btn-hover-sm
						</Button>
					</li>
					<li className="col">
						<Button style="hover" size="xs">
							btn-hover-xs
						</Button>
					</li>
					<li className="col">
						<Button style="hover" size="sqr">
							sqr
						</Button>
					</li>
				</ul>

				{/* button - grayfilled */}
				<ul className="row mb-3">
					<li className="col-1 d-flex justify-content-center align-items-center text-center">{`style="grayfilled"`}</li>
					<li className="col">
						<Button style="grayfilled" size="lg">
							btn-grayfilled-lg
						</Button>
					</li>
					<li className="col">
						<Button style="grayfilled" size="md">
							btn-grayfilled-md
						</Button>
					</li>
					<li className="col">
						<Button style="grayfilled" size="sm">
							btn-grayfilled-sm
						</Button>
					</li>
					<li className="col">
						<Button style="grayfilled" size="xs">
							btn-grayfilled-xs
						</Button>
					</li>
					<li className="col">
						<Button style="grayfilled" size="sqr">
							sqr
						</Button>
					</li>
				</ul>

				{/* button - disabled */}
				<ul className="row mb-3">
					<li className="col-1 d-flex justify-content-center align-items-center text-center">{`style="disabled"`}</li>
					<li className="col">
						<Button size="lg" disabled>
							btn-disabled-lg
						</Button>
					</li>
					<li className="col">
						<Button size="md" disabled>
							btn-disabled-md
						</Button>
					</li>
					<li className="col">
						<Button size="sm" disabled>
							btn-disabled-sm
						</Button>
					</li>
					<li className="col">
						<Button size="xs" disabled>
							btn-disabled-xs
						</Button>
					</li>
					<li className="col">
						<Button size="sqr" disabled>
							sqr
						</Button>
					</li>
				</ul>

				{/* button - disabled */}
				<ul className="row mb-3">
					<li className="col-1 d-flex justify-content-center align-items-center text-center">{`transparent`}</li>
					<li className="col">
						<Button className="btn-bg-none">btn-bg-none</Button>
					</li>
				</ul>
			</div>
		</>
	);
};

export default ButtonView;
