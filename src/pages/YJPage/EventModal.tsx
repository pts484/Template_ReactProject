import { useLanguages } from '@/hooks/useLanguage/useLanguages.hook';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import _, { divide } from 'lodash';
import cx from 'classnames';

export function timeUnitAt(sec: number, unit = '') {
	// const Lang = useLanguages();
	const seconds = sec;
	if (seconds < 60) return `${Math.floor(seconds)} ${unit}`;
	const minutes = seconds / 60;
	if (minutes < 60) return `${Math.floor(minutes)} ${unit}`;
	const hours = minutes / 60;
	if (hours < 24) return `${Math.floor(hours)} ${unit}`;
	const days = hours / 24;
	if (days < 7) return `${Math.floor(days)} ${unit}`;
	const weeks = days / 7;
	if (weeks < 5) return `${Math.floor(weeks)} ${unit}`;
	const months = days / 30;
	if (months < 12) return `${Math.floor(months)} ${unit}`;
	const years = days / 365;
	return `${Math.floor(years)} ${unit}`;
}

/**
 * POPUP Widzard **************************************************************************
 * @param props
 */

declare interface EVENTMODAL {
	id: string; // 모달이 가지는 고유 ID, localStorage key 이름
	autoHideInterval: number;
	link: string;
	img: string;
	// showNone?: boolean;
}

const PARENT_MODAL_CLASS_NAME = 'global-model';

// const remoteWizzardCloser = (id: string, callback = () => {}) => {
// 	if (callback) callback();

// 	const _instanceBtn = document.createElement('button');
// 	document.body.appendChild(_instanceBtn);
// 	_instanceBtn.setAttribute('type', 'button');
// 	_instanceBtn.setAttribute('data-bs-dismiss', 'modal');
// 	_instanceBtn.setAttribute('data-bs-target', '#' + id);
// 	_instanceBtn.click();
// 	document.body.removeChild(_instanceBtn);

// 	const _backlayer = document.getElementsByClassName('modal-backdrop');
// 	if (_.size(_backlayer) > 0) {
// 		_.forEach(_backlayer, (el, i) => {
// 			el.remove();
// 		});
// 	}
// };

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

const EventModal: React.FC<any> = (props: EVENTMODAL): JSX.Element => {
	const Lang = useLanguages();
	const { language } = useSelector((store: RootState) => store.GlobalStatus);
	const closeTime = window.localStorage.getItem(props.id); // useState 써도 되는거??
	const { id, autoHideInterval, link, img } = props;

	// const { autoHideInterval, ...divProps } = props;

	useEffect(() => {
		if (closeTime) {
			// localStorage의 id가 있을 때 로직
			const endData = closeTime; // localStorage의 id == 끝나는 날
			const storageRemoveFlag = !(+new Date() - Number(endData) < 0); // 현재 날짜에서 - 끝나는 날 했는데 0보다 크면 true
			if (storageRemoveFlag) window.localStorage.removeItem(id); // true일 경우 localStorage 지움
		}
		console.log('버튼 누른 시간 : ', closeTime);
		console.log('현재 시간 : ', +new Date()); // + 안붙이면 Thu Jan 05 2023 11:41:45 GMT+0900 (한국 표준시) 일케 나옴. 붙이면 현재시간을 millisecond로 가져올 수 있음
		console.log('시간 차 : ', +new Date() - Number(closeTime));
	}, []);

	/**
	 * 몇일동안 보지 않기
	 * @param interval (sec)   0 이면 무제한
	 */

	const setAutoHideInterval = (flag: boolean, close: boolean) => {
		if (!flag) {
			window.localStorage.removeItem(id);
			return;
		}

		window.localStorage.setItem(id, JSON.stringify(+new Date() + autoHideInterval * 1000)); // millisecond 기준이니까 1000을 곱해줌
		remoteModalCloser(id);
		// close && remoteWizzardCloser(props.id);
	};

	return (
		<>
			<div className={cx(PARENT_MODAL_CLASS_NAME, closeTime ? 'modal-global-hide' : 'modal-global-show')}>
				<div className="event-modal">
					<div className="event-modal-content">
						<a href={link} target="_blank" rel="noopener noreferrer" className="event-modal-img-box">
							<img src={img} alt="" />
						</a>
						<div className="close-set-interval-box event-modal-footer">
							<button className="btn" onClick={(e) => setAutoHideInterval(true, true)}>
								{language !== 'en-US'
									? `${timeUnitAt(autoHideInterval)} ${Lang.modal_tutorial_duration_close_text} `
									: `${Lang.modal_tutorial_duration_close_text} ${timeUnitAt(autoHideInterval)}`}
							</button>
							<button className="btn" onClick={() => remoteModalCloser(id)}>
								{Lang.modal_close_text}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EventModal;
