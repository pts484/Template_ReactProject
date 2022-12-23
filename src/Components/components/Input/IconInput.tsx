/**
 * 커스텀 인풋 (디자인시스템 적용)
 */
import React, { Children, useEffect, useState, useRef } from 'react';
import cx from 'classnames';

import ICONS from '@/styles/icons';
import { copyToClipboard } from '@/helpers/common.helper';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/connectors.redux';

declare interface INPUT extends React.InputHTMLAttributes<HTMLInputElement> {
	caption?: CAPTION_MESSAGE;
	component?: JSX.Element;
	onValue?: (value: string | number | readonly string[], selValue?: any) => void;
	copy?: COPY_ITEM;
	icon?: any;
}
declare interface COPY_ITEM {
	icon?: any;
}

declare interface CAPTION_MESSAGE {
	error?: string;
	success?: string;
	info?: string;
}

const IconInput: React.FC<any> = (props: INPUT): JSX.Element => {
	const inputRef = useRef(null);

	const [focus, setFocus] = useState<boolean>(false);

	/**
	 * 캡션 값에 따라 오류, 정상 처리를 위한 스타일 문장 처리 함수
	 * @returns
	 */
	const inputState = (): string => {
		let classStr = props.readOnly ? 'cic-input-default-read-only ' : '';

		if (props?.caption?.error) {
			classStr += focus ? 'cic-input-error-focus' : 'cic-input-error';
			return classStr;
		}
		if (props?.caption?.success) {
			classStr += focus ? 'cic-input-success-focus' : 'cic-input-success';
			return classStr;
		}
		if (props?.caption?.info) {
			classStr += focus ? 'cic-input-info-focus' : 'cic-input-info';
			return classStr;
		}

		classStr += focus ? 'cic-input-default-focus' : '';
		return classStr;
	};

	/**
	 * 내부 onChange Effector
	 * 값이 변경되면 onValue Callback 으로 변경된 값을 피드백
	 */

	return (
		<>
			<div className={cx('cic-double-input', inputState(), props.className)}>
				<span className="cic-icon-input">{props?.icon}</span>
				<input
					className="cic-icon-input-p-2"
					ref={inputRef}
					{...props}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
				/>

				{props?.component && props.component}
			</div>
			{props?.caption?.info && (
				<div className={'message-info-box'}>
					<ICONS.info width="16" />
					<p>{props.caption.info}</p>
				</div>
			)}
			{props?.caption?.error && (
				<div className={'message-error-box'}>
					<ICONS.error width="16" />
					<p>{props.caption.error}</p>
				</div>
			)}
			{props.caption?.success && (
				<div className={'message-success-box'}>
					<ICONS.success width="16" />
					<p>{props.caption.success}</p>
				</div>
			)}
		</>
	);
};
export default IconInput;
