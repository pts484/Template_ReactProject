import React from 'react';
import ICONS from '@/assets/icons';

/**
 * 해당 컴포넌트는 디자인시스템 페이지에서 '뷰' 용도로 사용되는 컴포넌트입니다.
 * 따라서 실질적인 운용방법 및 설정 src/include/index.ts 를 참고 해 주세요.
 *
 * 기본 운용방법 (문자열 포함)
 * 1) 성공 시 토스트 window.toastr.success('TEXT')
 * 2) 실패 시 토스트 window.toastr.error('TEXT')
 * 3) 정보전달 또는 안내사항 window.toastr.info('TEXT')
 */

const ToastView = (): JSX.Element => {
	return (
		<>
			<div className="container">
				<h1>Toast</h1>
				<br />
				<p className="subhead-long-03 gray-500">
					﹗ Toast 운용은 현재 라이브러리로 진행하고 있습니다. (채널iN 베타 테스트 시점 작성함)
					<br />﹗ 현재 페이지에서 보여지는 디자인은 오직{' '}
					<code style={{ color: 'red', fontWeight: 'bold' }}>&#39;시각적인 표현&#39;</code> 만을 위한 목적으로
					리스트업 했기 때문에 실질적인 운용은 아래와 같이 진행 해야 합니다.
					<br />
					﹗ Toast 세부설정은 include/index.ts 를 참고 해 주세요!
					<br />
					<br />
					﹗ 기본 운용
					<br />﹗ 1&#41; info :{' '}
					<code style={{ color: '#4ebbf1', fontWeight: 'bold' }}>window.toastr.info</code>
					<code style={{ color: '#c76d6c', fontWeight: 'bold', fontSize: '0.95rem' }}>
						&#40;&#39;TEXT&#39;&#41;
					</code>
					<br />﹗ 2&#41; success :{' '}
					<code style={{ color: '#4ebbf1', fontWeight: 'bold' }}>window.toastr.success</code>
					<code style={{ color: '#c76d6c', fontWeight: 'bold', fontSize: '0.95rem' }}>
						&#40;&#39;TEXT&#39;&#41;
					</code>
					<br />﹗ 3&#41; error :{' '}
					<code style={{ color: '#4ebbf1', fontWeight: 'bold' }}>window.toastr.error</code>
					<code style={{ color: '#c76d6c', fontWeight: 'bold', fontSize: '0.95rem' }}>
						&#40;&#39;TEXT&#39;&#41;
					</code>
					<br />
				</p>
				<br />
				<hr />
				<br />

				{/* 안내 토스트 */}
				<div className="row my-3">
					<span className="col">Design System Toast</span>
				</div>
				<div className="row mb-3 text-start">
					<span className="subhead-02">info</span>
				</div>
				<div id="" className="" role="alert" aria-live="assertive" aria-atomic="true">
					<div className="cic-toast-body">
						<div className="cic-toast-detail">
							<ICONS.toastInfo />
							<div>
								<div className="body-02 text-white">안내 토스트</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				{/* 성공 토스트 */}
				<div className="row mb-3 text-start">
					<span className="subhead-02">success</span>
				</div>
				<div id="" className="" role="alert" aria-live="assertive" aria-atomic="true">
					<div className="cic-toast-body">
						<div className="cic-toast-detail">
							<ICONS.toastSuccess />
							<div>
								<div className="body-02 text-white">성공 토스트</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				{/* 실패 토스트 */}
				<div className="row mb-3 text-start">
					<span className="subhead-02">error</span>
				</div>
				<div id="" className="" role="alert" aria-live="assertive" aria-atomic="true">
					<div className="cic-toast-body">
						<div className="cic-toast-detail">
							<ICONS.toastError />
							<div>
								<div className="body-02 text-white">실패 토스트</div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />
				{/* Channel-iN toastr - header */}
				<div className="row my-3">
					<span className="col">Channel-iN Design</span>
				</div>
				<div className="row mb-3 text-start">
					<span className="subhead-02">info</span>
				</div>

				{/* Channel-iN toast - info */}
				<ul className="row mb-3">
					<li className="col">
						<div id="toast-container" style={{ position: 'relative' }}>
							<div className="toast toast-info" style={{ display: 'block', width: '100%' }}>
								<div className="toast-message">Info</div>
							</div>
						</div>
					</li>
				</ul>

				{/* Channel-iN toast - success */}
				<div className="row mb-3 text-start">
					<span className="subhead-02">success</span>
				</div>
				<ul className="row mb-3">
					<li className="col">
						<div id="toast-container" style={{ position: 'relative' }}>
							<div className="toast toast-success" style={{ display: 'block', width: '100%' }}>
								<div className="toast-message">success</div>
							</div>
						</div>
					</li>
				</ul>

				{/* Channel-iN toast - error */}
				<div className="row mb-3 text-start">
					<span className="subhead-02">error</span>
				</div>
				<ul className="row mb-3">
					<li className="col">
						<div id="toast-container" style={{ position: 'relative' }}>
							<div className="toast toast-error" style={{ display: 'block', width: '100%' }}>
								<div className="toast-message">error</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
};

export default ToastView;
