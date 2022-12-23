import React from 'react';
import ICONS from '@/styles/icons';
import LOGOS from '@/styles/logos';

const ModalLayout = () => (
	<div className="container">
		<h1>Modal Layout</h1>
		<span className="subhead-long-03 gray-500">공통 모달 레이아웃 입니다</span>
		<br />
		<br />
		<span className="subhead-long-03 gray-500">
			크게 cic-modal-header, cic-modal-body로 나뉨.
			<br />
			cic-modal-header 에는 모달의 title 이 들어가고 cic-modal-body 에는 모달의 contents와 footer-btn(닫기,
			자세히보기 등) 이 들어갑니다.
			<br />
			두개의 큰틀에서 contents 작성하시고, 스타일 따로 작성하시면 됩니다~
		</span>
		<br />
		<hr />
		<div
		// className="modal fade"
		// id="buyModalnotApproved"
		// aria-hidden="true"
		// aria-labelledby="buyModalnotApproved2Label"
		// tabIndex={-1}
		>
			<div className={'modal-dialog modal-dialog-centered justify-content-center'}>
				{/* 모달 화면에서 정중앙 */}
				<div
					className={'cic-modal-container modal-content'}
					style={{ boxShadow: '0 0.5rem 1rem rgb(0 0 0 / 15%)' }}
					// box-shoadow는 디자인 시스템 라우터 페이지에서 보여주기 위한 예시임 실사용 시 삭제해도 됩니다
				>
					<div className={'cic-modal-header'}>
						{/* 모달 헤더 (title) */}
						<button
							className={'cic-modal-headback-btn d-flex align-items-center'}
							data-bs-target="#buyModal"
							data-bs-toggle="modal"
						>
							<ICONS.back />
							<h6 className={'modal-title text-900'} id="buyModalnotApprovedLabel">
								구매를 진행합니다
							</h6>
						</button>
					</div>
					<div className={'cic-modal-body'}>
						{/* 모달 바디 (내용 들어가는 부분) */}
						모달 내용
						<div className={'cic-modal-btn-cont'}>
							{/* 모달 푸터 (btn 부분) */}
							<button
								type="button"
								className="btn-grayline-md w-100"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								취소
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
export default ModalLayout;
