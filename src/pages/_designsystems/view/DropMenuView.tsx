import { faAdjust, faEarthAsia, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import DropMenu from '../components/DropMenu/DropMenu';

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
				<code style={{ color: '#4ebbf1', fontWeight: 'bold' }}>type, onChange</code> 를 지정 후 변경 할 타입을
				작성하거나 함수를 넣으시면 됩니다.
			</p>
			<br />
			<hr />
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
		</div>
	);
};

export default DropMenuView;
