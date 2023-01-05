import { useLanguages } from '@/hooks/useLanguage/useLanguages.hook';
import React, { CSSProperties, useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';

export function timeUnitAt(sec: number, unit = '') {
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

declare interface EVENT_MODAL {
	id: string; // 모달이 가지는 고유 ID, localStorage key 이름
	autoHideInterval: number;
	link?: string;
	img: string;
	showNone?: boolean;
}

const PARENT_MODAL_CLASS_NAME = 'global-model';

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

const EventModal: React.FC<any> = (props: EVENT_MODAL): JSX.Element => {
	const outsideRef = useRef<HTMLAnchorElement>(null);
	const Lang = useLanguages();
	const { language } = useSelector((store: RootState) => store.GlobalStatus);
	const [closeTime, setCloseTime] = useState(window.localStorage.getItem(props.id));
	const { id, autoHideInterval, link, img, showNone } = props;

	useEffect(() => {
		if (closeTime) {
			// localStorage의 id가 있을 때 로직
			const endData = closeTime; // localStorage의 id == 끝나는 날
			const storageRemoveFlag = !(+new Date() - Number(endData) < 0); // 현재 날짜에서 - 끝나는 날 했는데 0보다 크면 true
			if (storageRemoveFlag) {
				// true일 경우 localStorage 지움
				window.localStorage.removeItem(id);
				setCloseTime(''); // 이걸 안넣으면 새고 2번해야지만 팝업이 다시 뜸... 왜?
			}
		}
		console.log('버튼 누른 시간 : ', closeTime);
		console.log('현재 시간 : ', +new Date()); // + 안붙이면 Thu Jan 05 2023 11:41:45 GMT+0900 (한국 표준시) 일케 나옴. 붙이면 현재시간을 millisecond로 가져올 수 있음
		console.log('시간 차 : ', +new Date() - Number(closeTime));
	}, []);

	const setAutoHideInterval = (flag: boolean, close: boolean) => {
		if (!flag) {
			window.localStorage.removeItem(id);
			return;
		}

		window.localStorage.setItem(id, JSON.stringify(+new Date() + autoHideInterval * 1000)); // millisecond 기준이니까 1000을 곱해줌
		close && remoteModalCloser(id);
	};

	// const [motion, setMotion] = useState(false);
	// const modalMotion = () => {
	// 	setMotion(true);
	// 	const box = document.querySelector('.event-modal-img-box') as HTMLElement;
	// 	if (box != null) {
	// 		if (motion) {
	// 			box.style.animation = 'motion 1s';
	// 			setMotion(false);
	// 		}
	// 	}
	// };

	const modalMotion = (): void => {
		if (!outsideRef.current) return undefined;

		outsideRef.current.classList;

		// const box = document.querySelector('.motion') as HTMLElement;
		// const modalClass = box?.getAttribute('class') ?? '';

		outsideRef.current.classList.add('modal-motion');
		setTimeout(() => {
			outsideRef?.current?.classList.remove('modal-motion');
		}, 1000);

		// if (modalClass.includes('modal-motion')) {
		// 	box?.classList.remove('modal-motion');
		// } else {
		// 	box?.classList.add('modal-motion');
		// }
	};

	return (
		<div
			className={cx(
				PARENT_MODAL_CLASS_NAME,
				'event-modal',
				closeTime || showNone ? 'modal-global-hide' : 'modal-global-show',
			)}
			onClick={modalMotion}
		>
			<div
				className="event-modal-content"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<a
					ref={outsideRef}
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="motion event-modal-img-box"
				>
					<img src={img} alt="popup image" />
				</a>
				<div className="close-set-interval-box event-modal-footer">
					<button className="btn" onClick={(e) => setAutoHideInterval(true, true)}>
						{language !== 'en-US'
							? `${timeUnitAt(autoHideInterval)} ${Lang.chin_event_modal_tutorial_duration_close} `
							: `${Lang.chin_event_modal_tutorial_duration_close} ${timeUnitAt(autoHideInterval)} day`}
					</button>
					|
					<button className="btn" onClick={() => remoteModalCloser(id)}>
						{language !== 'en-US' ? `${Lang.chin_event_modal_close}` : `${Lang.chin_event_modal_close}`}
					</button>
				</div>
			</div>
		</div>
	);
};

export default EventModal;
