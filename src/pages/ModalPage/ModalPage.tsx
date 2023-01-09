import React from 'react';
import EventModal from '../../components/Modal/EventModal';

export const ModalPage: React.FC<any> = (): JSX.Element => {
	return (
		<div>
			<div className="container">
				<h1>Event Modal</h1>
				<span>????</span>
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
