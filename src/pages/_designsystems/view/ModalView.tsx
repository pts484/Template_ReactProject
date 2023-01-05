import React from 'react';
import Modal, {
	remoteModalOpener,
	remoteModalCloser,
	remoteModalToggler,
} from '@/pages/_designsystems/components/Modal/Modal';

const DesignSystemTooltip: React.FC = (): JSX.Element => {
	const idModal1 = 'sample-modals-1';
	const idModal2 = 'sample-modals-2';

	return (
		<div className="container">
			<h1 className="mb-3">Modal</h1>
			<p className="subhead-long-03 gray-500">
				<code style={{ color: '#33bba0', fontWeight: 'bold' }}>{`<Modal>`}</code>에 props로 id와 backdrop
				입력하여 사용합니다.
			</p>
			{/* 
			<button onClick={() => remoteModalOpener(idModal1)}>모달1 열기</button>
			<button onClick={() => remoteModalCloser(idModal1)}>모달1 닫기</button>
			<button onClick={() => remoteModalToggler(idModal1)}>모달1 토글</button>

			<button onClick={() => remoteModalOpener(idModal1, false)}>모달1만 열기</button>
			<button onClick={() => remoteModalCloser(idModal1, false)}>모달1만 닫기</button>
			<button onClick={() => remoteModalToggler(idModal1, false)}>모달1만 토글</button>

			<br />

			<button onClick={() => remoteModalOpener(idModal2)}>모달2 열기</button>
			<button onClick={() => remoteModalCloser(idModal2)}>모달2 닫기</button>
			<button onClick={() => remoteModalToggler(idModal2)}>모달2 토글</button>

			<button onClick={() => remoteModalOpener(idModal2, false)}>모달2만 열기</button>
			<button onClick={() => remoteModalCloser(idModal2, false)}>모달2만 닫기</button>
			<button onClick={() => remoteModalToggler(idModal2, false)}>모달2만 토글</button> */}

			<br />
			<hr />
			<button onClick={() => remoteModalOpener(idModal1)} className="btn-line-md me-2">
				backdrop 없는 모달
			</button>
			<button onClick={() => remoteModalOpener(idModal2)} className="btn-filled-md">
				backdrop 있는 모달
			</button>

			<div className="col row row-cols-4">
				<Modal id={idModal1} backdrop={false}>
					<div>모달의 내용을 입력해 주세요</div>
				</Modal>
				<Modal id={idModal2}>
					<div>
						<hr />
						<span> 모달 2</span>
						<br />
						<br />
						<hr />
					</div>
				</Modal>
			</div>
		</div>
	);
};

export default DesignSystemTooltip;
