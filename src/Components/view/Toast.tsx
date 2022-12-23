import React from 'react';
import ICONS from '@/styles/icons';
import LOGOS from '@/styles/logos';

const Toast = () => (
	<div className="container">
		<h1>Toast</h1>
		<span className="subhead-long-03 gray-500">설명</span>
		<br />
		<br />
		<hr />

		{/* 안내 토스트 */}
		<div id={''} className="" role="alert" aria-live="assertive" aria-atomic="true">
			<div className="cic-toast-body">
				<div>
					<div className="cic-toast-detail">
						{/* <ICONS.toast_info /> */}
						<div>
							<div className="body-02 text-white">안내 토스트</div>
							<div className="body-02 text-white">so what</div>
						</div>
					</div>
					<button type="button" className="btn-bg-none" data-bs-dismiss="toast" aria-label="Close">
						<ICONS.x width={24} />
					</button>
				</div>
			</div>
		</div>
		<br />
		{/* 성공 토스트 */}
		<div id={''} className="" role="alert" aria-live="assertive" aria-atomic="true">
			<div className="cic-toast-body">
				<div>
					<div className="cic-toast-detail">
						{/* <ICONS.toast_success /> */}
						<div>
							<div className="body-02 text-white">성공 토스트</div>
						</div>
					</div>
					<button type="button" className="btn-bg-none" data-bs-dismiss="toast" aria-label="Close">
						<ICONS.x width={24} />
					</button>
				</div>
			</div>
		</div>
		<br />
		{/* 실패 토스트 */}
		<div id={''} className="" role="alert" aria-live="assertive" aria-atomic="true">
			<div className="cic-toast-body">
				<div>
					<div className="cic-toast-detail">
						{/* <ICONS.toast_error /> */}
						<div>
							<div className="body-02 text-white">실패 토스트</div>
						</div>
					</div>
					<button type="button" className="btn-bg-none" data-bs-dismiss="toast" aria-label="Close">
						<ICONS.x width={24} />
					</button>
				</div>
			</div>
		</div>
		<div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
			<div className={'cic-toast-body show'}>
				<strong className="me-auto">
					<i className="" />
				</strong>

				{/* <small className="text-muted">2 seconds ago</small> */}
				<button
					type="button"
					className="btn-close float-end"
					data-bs-dismiss="toast"
					aria-label="Close"
				></button>
			</div>

			{<div className="cic-toast-body">dfdfsdfasdf</div>}
		</div>
	</div>
);
export default Toast;
