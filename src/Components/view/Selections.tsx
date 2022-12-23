import React from 'react';
import ICONS from '@/styles/icons';
import LOGOS from '@/styles/logos';

const Selections = () => (
	<div className="container">
		<h1>Selections</h1>
		<span className="subhead-long-03 gray-500">토글, 라디오, 체크박스</span>
		<br />
		<span className="subhead-long-03 gray-500"></span>
		<br />
		<br />
		<hr />
		{/* Header */}
		<div className={'row row-cols-1'}>
			{/* 토글 버튼 */}
			<div className={'col mb-4'}>
				<strong>토글</strong>
				<div className="cic-toggle-wrapper">
					<input type="checkbox" name="toggle" className={'cic-toggle'} id="toggle" />
					<label htmlFor="toggle"></label>
				</div>
			</div>
			{/* 라디오 */}
			<div className={'col mb-4'}>
				<strong>라디오</strong>
				<div>
					<input id="radio-1" className={'cic-radio'} name="radio-group" type="radio" />
					<label htmlFor="radio-1" className={'cic-radio-label'}></label>
				</div>
				<div>
					<input id="radio-2" className={'cic-radio'} name="radio-group" type="radio" />
					<label htmlFor="radio-2" className={'cic-radio-label'}>
						라디오 2
					</label>
				</div>
				<div>
					<input id="radio-3" className={'cic-radio'} name="radio-group" type="radio" />
					<label htmlFor="radio-3" className={'cic-radio-label'}>
						라디오 3
					</label>
				</div>
			</div>
			{/* 체크박스 */}
			<div className={'col mb-4'}>
				<strong>체크박스</strong>
				{/* input 태그는 opacity로 가리고 label을 커스텀 한 것 이라 
                checkbox 만 쓰고 싶은 경우에도 라벨과 같이 써줘야함 */}
				<div>
					<input id="checkbox-1" className={'cic-checkbox'} name="checkbox-1" type="checkbox" />
					<label htmlFor="checkbox-1" className={'cic-checkbox-label'}></label>
				</div>
				<div>
					<label htmlFor="checkbox-2" className={'cic-checkbox-label'}>
						<div>지금 구매 가능</div>
						<span>
							<input id="checkbox-2" className={'cic-checkbox'} name="checkbox-2" type="checkbox" />
						</span>
					</label>
				</div>
				<div>
					<input id="checkbox-3" className={'cic-checkbox'} name="checkbox-3" type="checkbox" />
					<label htmlFor="checkbox-3" className={'cic-checkbox-label'}>
						체크박스 3
					</label>
				</div>
			</div>
		</div>
	</div>
);
export default Selections;
