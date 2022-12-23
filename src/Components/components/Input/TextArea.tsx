/**
 * 커스텀 인풋 (디자인시스템 적용)
 */
import React, { Children, useEffect, useState, useRef } from 'react';
import cx from 'classnames';

import ICONS from '@/styles/icons';
import { copyToClipboard } from '@/helpers/common.helper';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/connectors.redux';

declare interface INPUT extends React.InputHTMLAttributes<HTMLTextAreaElement> {
	caption?: CAPTION_MESSAGE;
	selects?: SELECTOR_ITEM[];
	component?: JSX.Element;
	onValue?: (value: string | number | readonly string[], selValue?: any) => void;
	nextModal?: MODAL;
	copy?: COPY_ITEM;
}
declare interface COPY_ITEM {
	icon?: any;
}
declare interface SELECTOR_ITEM {
	icon?: any;
	name: string;
	value: any;
	callback: (props: any) => any;
}

declare interface CAPTION_MESSAGE {
	error?: string;
	success?: string;
	info?: string;
}
declare interface MODAL {
	icon?: any;
	name?: string;
	target: string;
	disable?: boolean;
}

const TextArea: React.FC<any> = (props: INPUT): JSX.Element => {
	const wallet = useSelector((store: RootState) => store.Wallet);
	const inputRef = useRef(null);
	const [selValue, setSelectValue] = useState<any>(props?.selects?.length > 0 ? props?.selects[0] : null);
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

	useEffect(() => {
		if (!inputRef?.current?.value) return;

		props.onValue && props.onValue(inputRef.current.value, selValue);
	}, [inputRef?.current?.value, selValue]);

	return (
		<>
			<div className={cx('cic-input-default', inputState(), props.className)} style={{ padding: '0' }}>
				<textarea
					className="profileDescription"
					ref={inputRef}
					{...props}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
				/>
				{selValue && (
					<button type="button" data-bs-toggle="dropdown" aria-expanded="false">
						{selValue.icon && selValue.icon}
						<span>{selValue.name}</span>
						<ICONS.chevron_down className="gray-400" width="20" />
						{/* Select Pannel */}
						<div className="dropdown-menu dropdown-menu-end dropdown-pannel">
							{props?.selects.map((item, i): JSX.Element => {
								return (
									<div
										key={i}
										className="dropdown-item"
										onClick={(e) => {
											e.stopPropagation();
											setSelectValue(item);
										}}
									>
										{item?.icon && props.selects[i].icon}
										<span className="flex-grow-1">{item.name}</span>
									</div>
								);
							})}
						</div>
					</button>
				)}

				{props?.component && props.component}
				{props?.copy?.icon && (
					<button
						onClick={() => {
							copyToClipboard(wallet?.info?.address);
						}}
					>
						<img src={props?.copy?.icon} style={{ cursor: 'pointer' }} />
					</button>
				)}
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
export default TextArea;
