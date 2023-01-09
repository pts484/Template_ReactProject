import React from 'react';
import MessageBox from '../../../components/MessageBox/MessageBox';

const MessageBoxView = (): JSX.Element => {
	return (
		<>
			<div className="container">
				<h1>Message Box</h1>
				<br />
				<p className="subhead-long-03 gray-500">
					﹗ Message Box는 div가 Container 된 상태로 제작 된 컴포넌트입니다.
					<br />
					﹗기본 운용 태그 : <code style={{ color: '#33bba0', fontWeight: 'bold' }}>{`<MessageBox/>`}</code>
					<br />
					﹗success, error 상태 운용 :
					<code style={{ color: '#33bba0', fontWeight: 'bold' }}>{` <MessageBox/>`}</code> 에 props로{' '}
					<code style={{ color: '#4ebbf1', fontWeight: 'bold' }}>success, error</code> 를 넣어주면 됩니다.
					<br />
					﹗props 중 <code style={{ color: '#4ebbf1', fontWeight: 'bold' }}>message</code> 는{' '}
					<code style={{ color: 'red', fontWeight: 'bold' }}>필수속성</code>으로 타입을 지정했습니다.
					<code style={{ color: '#33bba0', fontWeight: 'bold' }}>{`<MessageBox/>`}</code> 에 props로{' '}
					<code style={{ color: '#4ebbf1', fontWeight: 'bold' }}>message</code> props에 문자열을 넣어주면
					됩니다.
				</p>
				<br />
				<hr />
				<br />
				{/* message box - header */}
				<ul className="row mb-3">
					<li className="col-1"></li>
					<li className="col text-start">
						<span className="subhead-02">default</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">success</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">error</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">{/* '여백의 미'**/}</span>
					</li>
				</ul>

				{/* message box - default */}
				<ul className="row mb-3">
					<li className="col-1 d-flex justify-content-center align-items-center text-center">message box</li>
					<li className="col">
						<MessageBox message="기본 메세지" />
					</li>
					<li className="col">
						<MessageBox message="성공 메세지" success />
					</li>
					<li className="col">
						<MessageBox message="에러 메시지" error />
					</li>
					<li className="col">{/* '여백의 미'**/}</li>
				</ul>
			</div>
		</>
	);
};

export default MessageBoxView;
