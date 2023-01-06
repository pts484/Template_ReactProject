import React from 'react';
import EventModal from './EventModal';

export const YJPage: React.FC<any> = (): JSX.Element => {
	return (
		<div>
			<div className="container">
				<h1>Event Modal</h1>
				<p className="subhead-long-03 gray-500">
					﹗<code style={{ color: '#33bba0', fontWeight: 'bold' }}>{`<EventModal>`}</code>에 props로{' '}
					<code style={{ color: '#4ebbf1', fontWeight: 'bold' }}>id, autoHideInterval, link, img </code>를
					입력하여 사용합니다.
					<br />﹗ props에 <code style={{ color: '#4ebbf1', fontWeight: 'bold' }}>showNone</code>를 입력하면
					모달을 숨길 수 있습니다.
				</p>
				<hr />
				<EventModal
					// showNone
					id="eventModal"
					autoHideInterval={60 * 60 * 24 * 3} // 초 분 시 일
					link="https://www.naver.com/"
					img="https://picsum.photos/386/416"
				/>
			</div>
		</div>
	);
};
