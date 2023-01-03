import React from 'react';
import EventModal from './EventModal';
import { ModalContainer } from './ModalContainer';

export const YJPage: React.FC<any> = (): JSX.Element => {
	// const handleSubmit = () => {
	// 	window.toastr.success('전송완료');
	// 	console.log('성공');
	// };

	return (
		<div>
			<div className="container">
				<h1>Modal</h1>
				<span>버튼 클릭하면 나오게?</span>
				<hr />
				<ModalContainer
					titleValue="이건 제목임 제목이 진짜 엄청나게 길면 어케? 응? 그럼 밖으로 삐져나가는거야?????????"
					contentValue="이건 내용임 우왕아아 내용 짱 많아 근데 글씨 밖에 못 넣어어어ㅓ 그래도 괜찮아??????? 응????"
					// handleSubmit={handleSubmit}
				></ModalContainer>
				<hr />
				<h1>Modal</h1>
				<span>버튼 클릭하면 나오게?</span>
				<EventModal id="1" />
			</div>
		</div>
	);
};
