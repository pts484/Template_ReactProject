import React from 'react';

const Selections = () => (
	<div className="container">
		<h1>Selections</h1>
		<span className="subhead-long-03">토글, 라디오, 체크박스</span>
		<br />
		<span className="subhead-long-03"></span>
		<br />
		<br />
		<hr />
		<div className="row row-cols-1">
			{/* 토글 스위치 */}
			<div className="col mb-4">
				<strong>토글</strong>
				<div className="cic-toggle-wrapper">
					<input type="checkbox" name="toggle" className="cic-toggle" id="toggle" />
					<label htmlFor="toggle"></label>
				</div>
			</div>
			{/* 라디오 */}
			<div className="row mb-4">
				<label>
					<input type="radio" name="contact" value="fir" />
					<span>라디오 1</span>
				</label>

				<label>
					<input type="radio" name="contact" value="sec" checked />
					<span>라디오 2 checked</span>
				</label>

				<label>
					<input type="radio" name="contact" value="thr" disabled />
					<span>라디오 3 disabled</span>
				</label>
			</div>
			{/* 체크박스 */}
			<div className="row mb-4">
				<label>
					<input type="checkbox" name="contact" value="fir" />
					<span>체크박스 1</span>
				</label>

				<label>
					<input type="checkbox" name="contact" value="sec" checked />
					<span>체크박스 2 checked</span>
				</label>

				<label>
					<input type="checkbox" name="contact" value="thr" disabled />
					<span>체크박스 3 disabled</span>
				</label>
			</div>
		</div>
	</div>
);
export default Selections;
