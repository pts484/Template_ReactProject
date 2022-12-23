/**
 * 커스텀 셀렉트 인풋 (디자인시스템 적용)
 */
import React, { Children, useEffect, useState, useRef } from 'react';
import cx from 'classnames';
import ICONS from '@/styles/icons';
import LOGOS from '@/styles/logos';

declare interface SELECT extends React.InputHTMLAttributes<HTMLInputElement> {
	children?: JSX.Element;
	caption?: CAPTION_MESSAGE;
	selects: SELECTOR_ITEM[];
	onValue?: (value: string | number | readonly string[] | Record<string, any>) => void;
}

declare interface SELECTOR_ITEM {
	icon?: any;
	name: string;
	value: any;
}

declare interface CAPTION_MESSAGE {
	error?: string;
	success?: string;
	info?: string;
}

const Select: React.FC<any> = (props: SELECT): JSX.Element => {
	const [value, setValue] = useState<any>(
		props?.defaultValue ? props?.defaultValue : props?.selects?.length > 0 ? props?.selects[0] : null,
	);

	useEffect(
		() =>
			setValue(props?.defaultValue ? props?.defaultValue : props?.selects?.length > 0 ? props?.selects[0] : null),
		[props?.selects],
	);

	/**
	 * 캡션 값에 따라 오류, 정상 처리를 위한 스타일 문장 처리 함수
	 * @returns string 상태에 따른 css class name
	 */
	const inputState = (): string => {
		let classStr = props.className ? props.className : 'select-default-btn';

		classStr = props.readOnly || props.disabled ? 'select-disabled-btn disabled' : classStr;

		if (props?.caption?.error) {
			classStr += focus() ? 'cic-input-error-focus' : 'cic-input-error';
			return classStr;
		}
		if (props?.caption?.success) {
			classStr += focus() ? 'cic-input-success-focus' : 'cic-input-success';
			return classStr;
		}
		if (props?.caption?.info) {
			classStr += focus() ? 'cic-input-info-focus' : 'cic-input-info';
			return classStr;
		}

		return classStr;
	};
	return (
		<>
			<div className="select-default">
				<button
					className={cx(inputState(), 'main-select-btn subhead-02 text-900')}
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					{props.children ? (
						props.children
					) : (
						<>
							{value?.icon && value.icon}
							<span className="flex-grow-1 text-800">{value?.name ? value?.name : 'No Items'}</span>
							{/* <ICONS.chevron_down className="text-600" /> */}
						</>
					)}
				</button>
				<ul className="dropdown-menu dropdown-menu-end dropdown-pannel w-100">
					{props?.selects.map((item, i): JSX.Element => {
						return (
							<li
								key={i}
								className="dropdown-item detail"
								onClick={(e) => {
									// e.stopPropagation(); //이밴트 버블링이 되어야 클릭시 패널이 닫힘
									setValue(item);
									props.onValue && props.onValue(item);
									// console.log(e.target.value);
								}}
							>
								{item?.icon && item.icon}
								<span className="name ps-2">{item.name}</span>
							</li>
						);
					})}
				</ul>
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
export default Select;
