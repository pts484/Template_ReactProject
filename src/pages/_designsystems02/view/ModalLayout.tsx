// 📣 bootstrap 모달을 기반으로 작성하였고 따로 custom 시 각 페이지 내 scss 파일에 작성하여 설명 주석 달아주세요
import React from 'react';
import LOGOS from '@/assets/logos';
import ICONS from '@/assets/icons';

const ModalLayout = () => (
	<div className="container">
		<h1>Modal Layout</h1>
		<span className="subhead-long-03">공통 모달 레이아웃 입니다</span>
		<br />
		<br />
		<span className="subhead-long-03">
			크게 cic-modal-header, cic-modal-body, cic-modal-footer로 나뉨.
			<br />
			cic-modal-header 에는 모달의 title 이 들어가고 cic-modal-body 에는 모달의 내용이 들어갑니다 (내용은 따로
			커스텀css파일에 작성)
			<br />
			그리고 cic-modal-footer는 모달의 button (예. 닫기, 취소, 등록 등)이 들어갑니다
			<br />
		</span>
		<br />
		<hr />
		{/* 모달 레이아웃 시작 */}
		<div
		// className="modal fade"
		// id="buyModalnotApproved"
		// aria-hidden="true"
		// aria-labelledby="buyModalnotApproved2Label"
		// tabIndex={-1}
		>
			<div className="modal-dialog">
				{/* 모달 화면에서 정중앙 */}
				<div
					className="cic-modal-container modal-content"
					// 모바일서 full-size시 in-md-modal 클래스명 넣어주세요
					style={{ boxShadow: '0 0.5rem 1rem rgb(0 0 0 / 15%)' }}
					// box-shoadow는 디자인 시스템 페이지에서 보여주기 위한 예시임 실사용 시 삭제해주세요
				>
					<div className="cic-modal-header">
						{/* 모달 헤더 (title) */}
						<button className="cic-modal-headback-btn" data-bs-target="#buyModal" data-bs-toggle="modal">
							<ICONS.back />
							<h6 id="이전으로 가는 모달 아이디">이전 모달로 돌아가자</h6>
						</button>
					</div>
					<div className="cic-modal-body">
						{/* 모달 바디 (내용 들어가는 부분) */}모달의 내용을 만들어 주쇼!
					</div>
					<div className="cic-modal-footer">
						{/* 모달 푸터 (btn 부분) */}
						<button
							type="button"
							className="btn-grayline-md w-100"
							data-bs-dismiss="modal"
							aria-label="Close"
						>
							취소
						</button>
						<button
							type="button"
							className="btn-filled-md w-100"
							data-bs-dismiss="modal"
							aria-label="Close"
						>
							등록
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
);
export default ModalLayout;
