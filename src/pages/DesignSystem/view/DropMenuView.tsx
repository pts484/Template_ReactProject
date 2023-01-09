import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import DropMenu from '../../../components/DropMenu/DropMenu';

const DropMenuView = (): JSX.Element => {
	return (
		<div className="container">
			<h1>Drop Menu</h1>
			<br />
			<p className="subhead-long-03 gray-500">
				﹗ Drop Menu은 div가 Container 된 상태로 제작 된 컴포넌트입니다.
				<br />﹗ 자식요소로 button과 ul(li도 포함)을 포함하고 있습니다.
				<br />
				﹗기본 운용 방식은{' '}
				<code style={{ color: '#33bba0', fontWeight: 'bold' }}>{`<DropMenu>버튼제목<DropMenu/>`}</code> 입니다.
				<br />
				﹗상태 변경 방법 : <code style={{ color: '#33bba0', fontWeight: 'bold' }}>{`<DropMenu>`}</code> 에
				props로 <code style={{ color: '#4ebbf1', fontWeight: 'bold' }}>borderNone, dropup</code> 를 순서에
				상관없이 전달 해 주면 됩니다. <br />
				﹗리스트 추가 : <code style={{ color: '#33bba0', fontWeight: 'bold' }}>{`<DropMenu>`}</code> 에 props로{' '}
				<code style={{ color: '#4ebbf1', fontWeight: 'bold' }}>contents</code> 를 받으며, 배열로
				<code style={{ color: '#4ebbf1', fontWeight: 'bold' }}> content : </code>
				<code style={{ color: '#33bba0', fontWeight: 'bold' }}> JSX.Element(ex : a, button)</code> 를 받게 되어
				있습니다.
			</p>
			<br />
			<hr />
			{/* message box - header */}
			<ul className="row mb-3">
				<li className="col-1"></li>
				<li className="col text-start">
					<span className="subhead-02">default</span>
				</li>
				<li className="col text-start">
					<span className="subhead-02">drop up</span>
				</li>
				<li className="col text-start">
					<span className="subhead-02">border none</span>
				</li>
				<li className="col text-start">
					<span className="subhead-02">{/* '여백의 미'**/}</span>
				</li>
			</ul>

			{/* message box - default */}
			<ul className="row mb-3">
				<li className="col-1 d-flex justify-content-center align-items-center text-center">Drop menu</li>
				<li className="col">
					<DropMenu
						contents={[
							{
								content: <button>한국어</button>,
							},
							{
								content: <button>English</button>,
							},
						]}
					>
						<FontAwesomeIcon icon={faEarthAsia} />
					</DropMenu>
				</li>
				<li className="col">
					<DropMenu
						dropup
						contents={[
							{
								content: (
									<a href="https://www.naver.com" target="_blank" rel="noreferrer">
										KlayMint
									</a>
								),
							},
							{
								content: (
									<a href="https://www.google.co.kr" target="_blank" rel="noreferrer">
										PER PROJECT
									</a>
								),
							},
							{
								content: (
									<a href="https://www.google.co.kr" target="_blank" rel="noreferrer">
										SUPER COMMUNITY
									</a>
								),
							},
						]}
					>
						Family Site
					</DropMenu>
				</li>
				<li className="col">
					<DropMenu
						borderNone
						contents={[
							{
								content: <button>내 자산</button>,
							},
							{
								content: <button>마이페이지</button>,
							},
							{
								content: <button>지갑 연결 해제</button>,
							},
						]}
					>
						border 제거 된 지갑연결
					</DropMenu>
				</li>
				<li className="col">{/* '여백의 미'**/}</li>
			</ul>
		</div>
	);
};

export default DropMenuView;
