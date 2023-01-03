import React from 'react';
import Modal, {
	remoteModalOpener,
	remoteModalCloser,
	remoteModalToggler,
} from '@/pages/_designsystems/components/_TEST_Modal/Modal';

const DesignSystemTooltip: React.FC = (): JSX.Element => {
	const idModal1 = 'sample-modals-1';
	const idModal2 = 'sample-modals-2';

	return (
		<div className="container">
			<h1 className="mb-3">Modal</h1>
			<span className="subhead-long-03 gray-500">설명</span>
			<br />
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
			<button onClick={() => remoteModalToggler(idModal2, false)}>모달2만 토글</button>

			<hr />
			<div className="col row row-cols-4">
				<Modal id={idModal1}>
					<div>
						<hr />
						<span> 모달 1</span>
						<br />
						<br />
						<hr />
					</div>
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
