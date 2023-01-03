import React from 'react';
import cx from 'classnames';

import './Modal.scss';

declare interface MODAL_LAYOUT extends React.HTMLAttributes<HTMLInputElement> {
	id: string; // 모달이 가지는 고유 ID
	children: JSX.Element | JSX.Element[];
}

/**
 * 해당 모달 컴포넌트를 모두 컨트롤하기위한 유니크한 값을 가지는 ClassName
 */
const PARENT_MODAL_CLASS_NAME = 'global-model';

/**
 * @param id // 열려는 모달 element id (문자열이 정확해야됨)
 * @param beforeClose //기존에 열려있는 모달을 모두 닫을지 여부 (기본값 : true 모두 닫음)
 */
export const remoteModalOpener = (id: string, beforeClose: boolean = true) => {
	if (beforeClose) {
		remoteModalCloseAll();
	}

	const _modalElement = document.getElementById(id);
	const _toggleStr = _modalElement?.getAttribute('class') ?? '';

	if (_toggleStr.includes('modal-global-hide')) {
		_modalElement?.classList.remove('modal-global-hide');
		_modalElement?.classList.add('modal-global-show');
	}

	// const _backlayer = document.getElementsByClassName(PARENT_MODAL_CLASS_NAME);
	// if (_.size(_backlayer) > 0) {
	//     _.forEach(_backlayer, (el, i) => {
	//         el.remove();
	//     });
	// }
};

/**
 * @param id // 닫으려는 모달 element id (문자열이 정확해야됨)
 * @param beforeClose //기존에 열려있는 모달을 모두 닫을지 여부 (기본값 : true 모두 닫음)
 */
export const remoteModalCloser = (id: string, beforeClose: boolean = true) => {
	const _modalElement = document.getElementById(id);
	const _toggleStr = _modalElement?.getAttribute('class') ?? '';

	if (beforeClose) {
		remoteModalCloseAll();
	}

	if (_toggleStr.includes('modal-global-show')) {
		_modalElement?.classList.remove('modal-global-show');
		_modalElement?.classList.add('modal-global-hide');
	}
};

/**
 * @param id // 열고 닫으려는 모달 element id (문자열이 정확해야됨)
 * @param beforeClose //기존에 열려있는 모달을 모두 닫을지 여부 (기본값 : true 모두 닫음)
 */
export const remoteModalToggler = (id: string, beforeClose: boolean = true) => {
	const _modalElement = document.getElementById(id);
	const _toggleStr = _modalElement?.getAttribute('class') ?? '';

	if (_toggleStr.includes('modal-global-show')) {
		remoteModalCloser(id, beforeClose);
	} else {
		remoteModalOpener(id, beforeClose);
	}
};

const remoteModalCloseAll = (gModalClassName?: string) => {
	const _PARENT_MODAL_CLASS_NAME = gModalClassName ?? PARENT_MODAL_CLASS_NAME;
	const _allModals = document.getElementsByClassName(_PARENT_MODAL_CLASS_NAME);

	for (let index = 0; index < _allModals.length; ++index) {
		const _modalElement = _allModals.item(index);

		_modalElement?.classList.remove('modal-global-show');
		_modalElement?.classList.remove('modal-global-hide');
		_modalElement?.classList.add('modal-global-hide');
	}
};

const Modal = (props: MODAL_LAYOUT) => {
	const { id, children } = props;

	return (
		<div id={id} className={cx(PARENT_MODAL_CLASS_NAME, 'modal-global-hide')}>
			{/* <div className="modal-global-backdrop"></div> */}
			{React.Children.map(children, (child) => React.cloneElement(child))}
		</div>
	);
};

export default Modal;
