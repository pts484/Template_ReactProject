import React from 'react';
import LOGOS from '@/assets/logos';
import InputSelect from '../components/InputSelect';
import InputContainer from '../components/Input/InputContainer';
import Input from '../components/Input/Input';

const InputView2 = (): JSX.Element => {
	return (
		<>
			<div className="container">
				<h1>Input</h1>
				<span className="subhead-long-03 gray-500">
					﹗ input은 div가 Container 된 상태로 제작 된 컴포넌트입니다.
					<br />
					﹗기본 운용 방식은{' '}
					<code
						style={{ color: '#21725e', fontWeight: 'bold' }}
					>{`<InputContainer> <Input/> <InputContainer/>`}</code>{' '}
					입니다.
					<br />
					﹗상태에 따른 값을 주고 싶다면{' '}
					<code style={{ color: '#21725e', fontWeight: 'bold' }}>{`<InputContainer>`}</code> 에 props로{' '}
					<code style={{ color: '#0096ff', fontWeight: 'bold' }}>focus, readOnly, success, error</code> 를
					순서에 상관없이 전달 해 주면 됩니다.
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
						<span className="subhead-02">filled(defaultValue)</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">readonly</span>
					</li>
				</ul>
				{/* default - single input */}
				<ul className="row mb-3">
					<li className="col-1 d-flex justify-content-center align-items-center text-center">single input</li>
					<li className="col">
						<InputContainer>
							<Input placeholder="cic-input-default" />
						</InputContainer>
						{/* <input className="cic-input-default" placeholder="cic-input-default" /> */}
					</li>
					<li className="col">
						<InputContainer focus>
							<Input placeholder="cic-input-focus" />
						</InputContainer>
						{/* <input className="cic-input-default" placeholder="cic-input-default" /> */}
					</li>
					<li className="col">
						<InputContainer>
							<Input defaultValue="cic-input-default" />
						</InputContainer>
						{/* <input className="cic-input-default" placeholder="cic-input-default" /> */}
					</li>
					<li className="col">
						<InputContainer readOnly>
							<Input placeholder="cic-input-default" />
						</InputContainer>
						{/* <input className="cic-input-default" placeholder="cic-input-default" /> */}
					</li>
				</ul>

				{/* success - header */}
				<ul className="row mb-3">
					<li className="col-1"></li>
					<li className="col text-start">
						<span className="subhead-02">success - default</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">success - readonly</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">error - default</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">error - readonly</span>
					</li>
				</ul>
				{/* success - single input */}
				<ul className="row mb-3">
					<li className="col-1"></li>
					<li className="col w-100">
						<InputContainer success>
							<Input placeholder="cic-input-default" />
						</InputContainer>
					</li>
					<li className="col w-100">
						<InputContainer success readOnly>
							<Input placeholder="cic-input-default" />
						</InputContainer>
					</li>
					<li className="col w-100">
						<InputContainer error>
							<Input placeholder="cic-input-default" />
						</InputContainer>
					</li>
					<li className="col w-100">
						<InputContainer error readOnly>
							<Input placeholder="cic-input-default" />
						</InputContainer>
					</li>
				</ul>
			</div>
		</>
	);
};

export default InputView2;
