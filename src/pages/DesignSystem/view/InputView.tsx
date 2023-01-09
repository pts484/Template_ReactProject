import React from 'react';
import LOGOS from '@/assets/logos';
import InputContainer from '../../../components/Input/InputContainer';
import Input from '../../../components/Input/Input';
import Separate from '../../../components/Input/Seperate';
import SelectToken from '../../../components/Input/SelectToken';

const InputView = (): JSX.Element => {
	return (
		<>
			<div className="container">
				<h1>Input</h1>
				<br />
				<p className="subhead-long-03 gray-500">
					﹗ input은 div가 Container 된 상태로 제작 된 컴포넌트입니다.
					<br />
					﹗기본 운용 방식은{' '}
					<code
						style={{ color: '#33bba0', fontWeight: 'bold' }}
					>{`<InputContainer> <Input/> <InputContainer/>`}</code>{' '}
					입니다.
					<br />
					﹗상태 변경 방법 :{' '}
					<code style={{ color: '#33bba0', fontWeight: 'bold' }}>{`<InputContainer>`}</code> 에 props로{' '}
					<code style={{ color: '#4ebbf1', fontWeight: 'bold' }}>focus, readOnly, success, error</code> 를
					순서에 상관없이 전달 해 주면 됩니다. <br />
					﹗타입 변경 및 onChange 추가 :{' '}
					<code style={{ color: '#33bba0', fontWeight: 'bold' }}>{`<Input/>`}</code> 에 props로{' '}
					<code style={{ color: '#4ebbf1', fontWeight: 'bold' }}>type, onChange</code> 를 지정 후 변경 할
					타입을 작성하거나 함수를 넣으시면 됩니다.
				</p>
				<br />
				<hr />
				<br />

				{/* single input - header */}
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

				{/* single input - default */}
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
							<Input placeholder="focus" />
						</InputContainer>
						{/* <input className="cic-input-default" placeholder="cic-input-default" /> */}
					</li>
					<li className="col">
						<InputContainer>
							<Input defaultValue="defaultValue" />
						</InputContainer>
						{/* <input className="cic-input-default" placeholder="cic-input-default" /> */}
					</li>
					<li className="col">
						<InputContainer readOnly>
							<Input placeholder="readOnly" />
						</InputContainer>
						{/* <input className="cic-input-default" placeholder="cic-input-default" /> */}
					</li>
				</ul>

				{/* single input success/error - header */}
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
				{/* single input - success/error */}
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

				<br />
				<hr />
				<br />

				{/* multiple input default - header */}
				<ul className="row mb-3">
					<li className="col-1"></li>
					<li className="col text-start">
						<span className="subhead-02">two input</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02"></span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">readonly</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02"></span>
					</li>
				</ul>
				{/* default - single input */}
				<ul className="row mb-3">
					<li className="col-1 d-flex justify-content-center align-items-center text-center">
						multiple input
					</li>
					<li className="col">
						<InputContainer>
							<Input type="number" placeholder="수량" />
							<Separate />
							<Input type="number" placeholder="개당 가격" />
							<SelectToken
								selects={[
									{ icon: <LOGOS.klayImg width="20" />, name: 'KLAY', value: 'klay' },
									{ icon: <LOGOS.perImg width="20" />, name: 'PER', value: 'per' },
									{ icon: <LOGOS.ethereumImg width="20" />, name: 'ethereum', value: 'ethereum' },
								]}
							/>
						</InputContainer>
						{/* <input className="cic-input-default" placeholder="cic-input-default" /> */}
					</li>
					<li className="col">
						<InputContainer readOnly>
							<Input type="number" placeholder="수량" />
							<Separate />
							<Input type="number" placeholder="개당 가격" />
							<SelectToken
								selects={[
									{ icon: <LOGOS.klayImg width="20" />, name: 'KLAY', value: 'klay' },
									{ icon: <LOGOS.perImg width="20" />, name: 'PER', value: 'per' },
									{ icon: <LOGOS.ethereumImg width="20" />, name: 'ethereum', value: 'ethereum' },
								]}
							/>
						</InputContainer>
						{/* <input className="cic-input-default" placeholder="cic-input-default" /> */}
					</li>
				</ul>

				{/* multiple input success/error - header */}
				<ul className="row mb-3">
					<li className="col-1"></li>
					<li className="col text-start">
						<span className="subhead-02">success - multiple</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">error - multiple</span>
					</li>
				</ul>
				{/* multiple input - success/error */}
				<ul className="row mb-3">
					<li className="col-1"></li>
					<li className="col">
						<InputContainer success>
							<Input type="number" placeholder="수량" />
							<Separate />
							<Input type="number" placeholder="개당 가격" />
							<SelectToken
								selects={[
									{ icon: <LOGOS.klayImg width="20" />, name: 'KLAY', value: 'klay' },
									{ icon: <LOGOS.perImg width="20" />, name: 'PER', value: 'per' },
									{ icon: <LOGOS.ethereumImg width="20" />, name: 'ethereum', value: 'ethereum' },
								]}
							/>
						</InputContainer>
						{/* <input className="cic-input-default" placeholder="cic-input-default" /> */}
					</li>
					<li className="col">
						<InputContainer error>
							<Input type="number" placeholder="수량" />
							<Separate />
							<Input type="number" placeholder="개당 가격" />
							<SelectToken
								selects={[
									{ icon: <LOGOS.klayImg width="20" />, name: 'KLAY', value: 'klay' },
									{ icon: <LOGOS.perImg width="20" />, name: 'PER', value: 'per' },
									{ icon: <LOGOS.ethereumImg width="20" />, name: 'ethereum', value: 'ethereum' },
								]}
							/>
						</InputContainer>
						{/* <input className="cic-input-default" placeholder="cic-input-default" /> */}
					</li>
				</ul>
			</div>
		</>
	);
};

export default InputView;
