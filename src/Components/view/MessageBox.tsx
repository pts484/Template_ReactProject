import React from 'react';
// import ic_info from '@/_statics/images/ic-info.svg';
// import ic_cancel from '@/_statics/images/ic-input-cancel.svg';
// import ic_success from '@/_statics/images/ic-success.svg';

import ICONS from '@/styles/icons';
import LOGOS from '@/styles/logos';

const MessageBox = () => (
	<div className="container">
		<h1>MessageBox</h1>
		<span className="subhead-long-03 gray-500">설명</span>
		<br />
		<br />
		<hr />
		{/* Header */}
		<div className={'message-error-box'}>
			{/* <img src={ic_cancel} /> */}
			<ICONS.error className="danger-main" width="16" />
			<p>에러 메세지</p>
		</div>
		<div className={'message-success-box'}>
			{/* <img src={ic_success} /> */}
			<ICONS.success className="suc-main" width="16" />
			<p>성공 메세지</p>
		</div>
		<div className={'message-info-box'}>
			{/* <img src={ic_info} /> */}
			<ICONS.info className="info-main" width="16" />
			<p>기본 메세지</p>
		</div>
	</div>
);
export default MessageBox;
