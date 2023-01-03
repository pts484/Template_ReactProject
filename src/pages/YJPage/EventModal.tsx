import { useLanguages } from '@/hooks/useLanguage/useLanguages.hook';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

// export function timeUnitAt(sec: number, unit = '', Lang: Record<string, string | COMMON_FUNC>) {
// 	// const Lang = useLanguages();
// 	const seconds = sec;
// 	if (seconds < 60) return `${Math.floor(seconds)} ${Lang.seconds} ${unit}`;
// 	const minutes = seconds / 60;
// 	if (minutes < 60) return `${Math.floor(minutes)} ${Lang.minutes} ${unit}`;
// 	const hours = minutes / 60;
// 	if (hours < 24) return `${Math.floor(hours)} ${Lang.hours} ${unit}`;
// 	const days = hours / 24;
// 	if (days < 7) return `${Math.floor(days)} ${Lang.days} ${unit}`;
// 	const weeks = days / 7;
// 	if (weeks < 5) return `${Math.floor(weeks)} ${Lang.weeks} ${unit}`;
// 	const months = days / 30;
// 	if (months < 12) return `${Math.floor(months)} ${Lang.months} ${unit}`;
// 	const years = days / 365;
// 	return `${Math.floor(years)} ${Lang.years} ${unit}`;
// }
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

declare interface WizzardParams {
	id: string;
	// className?: string;
	// children?: JSX.Element | string | null;
	// closeHold?: boolean;
	// fullscreen?: boolean;
	// dClassName?: string;
	// onClick?: any;
	// title?: any;
	// lock?: boolean;
	onClose?: <T>(data?: any | null) => T | void;
	autoHideInterval: number;
}

const remoteWizzardCloser = (id: string, callback = () => {}) => {
	if (callback) callback();

	const _instanceBtn = document.createElement('button');
	document.body.appendChild(_instanceBtn);
	_instanceBtn.setAttribute('type', 'button');
	_instanceBtn.setAttribute('data-bs-dismiss', 'modal');
	_instanceBtn.setAttribute('data-bs-target', '#' + id);
	_instanceBtn.click();
	document.body.removeChild(_instanceBtn);

	const _backlayer = document.getElementsByClassName('modal-backdrop');
	if (_.size(_backlayer) > 0) {
		_.forEach(_backlayer, (el, i) => {
			el.remove();
		});
	}
};

const EventModal: React.FC<any> = (props: WizzardParams): JSX.Element => {
	// 언어
	const Lang = useLanguages();
	const { language } = useSelector((store: RootState) => store.GlobalStatus);

	useEffect(() => {
		if (window.localStorage.getItem(props.id)) {
			// localStorage의 id가 있을 때 로직
			const endData = window.localStorage.getItem(props.id); // localStorage의 id == 끝나는 날
			const storageRemoveFlag = !(+new Date() - Number(endData) < 0); // 현재 날짜에서 - 끝나는 날 했는데 0보다 크면 true
			if (storageRemoveFlag) window.localStorage.removeItem(props.id); // true일 경우 localStorage 지움
		}
	}, []);

	/**
	 * 몇일동안 보지 않기
	 * @param interval (sec)   0 이면 무제한
	 */
	const setAutoHideInterval = (flag: boolean, close: boolean) => {
		if (!flag) {
			window.localStorage.removeItem(props.id);
			return;
		}

		window.localStorage.setItem(props.id, JSON.stringify(+new Date() + props.autoHideInterval * 1000));
		close && remoteWizzardCloser(props.id);
	};

	return (
		<div {...props}>
			{/* <div className="position-bottom p-0 step-footer"></div> */}
			<div>
				{/* 임시 image */}
				<img src="https://picsum.photos/200/300" alt="" />
			</div>
			<div className="close-set-interval-box">
				<button className="btn" onClick={(e) => setAutoHideInterval(true, true)}>
					{language !== 'en-US'
						? `${timeUnitAt(props.autoHideInterval)} ${Lang.modal_tutorial_duration_close_text} `
						: `${Lang.modal_tutorial_duration_close_text} ${timeUnitAt(props.autoHideInterval)}`}
				</button>
			</div>
		</div>
	);
};

export default EventModal;