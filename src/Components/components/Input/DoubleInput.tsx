/**
 * 이중 인풋
 */

import React, { Children, useEffect, useState, useRef } from 'react';
import cx from 'classnames';

import ICONS from '@/styles/icons';
import _ from 'lodash';

declare interface DOUBLE_INPUT {
	className?: string;
	inputs: {
		first: React.InputHTMLAttributes<HTMLInputElement>;
		last: React.InputHTMLAttributes<HTMLInputElement>;
	};
	caption?: CAPTION_MESSAGE;
	selects?: SELECTOR_ITEM[];
	onValue?: (
		firstValue: string | number | readonly string[],
		lastValue: string | number | readonly string[],
		selValue?: SELECTOR_ITEM,
	) => void;
	nextModal?: MODAL;
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
declare interface MODAL {
	icon?: any;
	name?: string;
	target: string;
	disable?: boolean;
}

const DoubleInput: React.FC<any> = (props: DOUBLE_INPUT): JSX.Element => {
	const inputFirstRef = useRef(null);
	const inputLastRef = useRef(null);
	const [value, setValue] = useState<{
		first: string | number | readonly string[];
		last: string | number | readonly string[];
		select?: SELECTOR_ITEM;
	}>({
		first: props?.inputs?.first?.defaultValue ? props.inputs.first.defaultValue : '',
		last: props?.inputs?.last?.defaultValue ? props.inputs.last.defaultValue : '',
		select: props?.selects?.length > 0 ? props?.selects[0] : null,
	});

	const [onModal, setOnModal] = useState<any>(props?.nextModal);
	const [focus, setFocus] = useState<boolean>(false);
	const [togglePannel, showSelectPannel] = useState<boolean>(false);

	const inputState = (): string => {
		let classStr =
			props?.inputs?.first?.readOnly || props?.inputs?.last?.readOnly ? 'km-input-default-read-only ' : '';

		if (props?.caption?.error) {
			classStr += focus ? 'km-input-error-focus' : 'km-input-error';
			return classStr;
		}
		if (props?.caption?.success) {
			classStr += focus ? 'km-input-success-focus' : 'km-input-success';
			return classStr;
		}

		classStr += focus ? 'km-input-default-focus' : '';
		return classStr;
	};

	useEffect(() => {}, [onModal]);
	/**
	 * 내부 onChange Effector
	 * 값이 변경되면 onValue Callback 으로 변경된 값을 피드백
	 */
	useEffect(() => {
		if (!inputFirstRef || !inputLastRef) return;

		props.onValue && props.onValue(value?.first, value?.last, value?.select);
	}, [value]);
	return (
		<>
			<div className={cx('km-double-input', inputState(), props?.className)}>
				<input
					{...props?.inputs?.first}
					onChange={(e) => {
						// setValue(e.target.value);
						if (+e.target.value < 0) e.target.value = '';
						setValue({ ...value, first: +e.target.value });
					}}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					disabled={props?.nextModal?.disable}
				/>
				<input
					{...props?.inputs?.last}
					onChange={(e) => {
						if (+props?.inputs?.last?.max && +props?.inputs?.last?.max < +e.target.value) {
							const maxValue = Math.floor(+props?.inputs?.last?.max * 1000) / 1000;
							e.target.value = maxValue.toFixed(3);
						}
						if (+e.target.value <= 0) {
							e.target.value = '';
						}
						// setValue(e.target.value);
						setValue({ ...value, last: +e.target.value });
					}}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					disabled={props?.nextModal?.disable}
				/>
				<button
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
					onClick={(e) => {
						e.stopPropagation();
						showSelectPannel(!togglePannel);
					}}
					disabled={!(_.size(props?.selects) > 1)}
				>
					{value?.select?.icon && value?.select?.icon}
					<span>{value?.select?.name}</span>
					<ICONS.chevron_down className="gray-400" width="20" />
					{/* Select Pannel */}
					<div className={cx('dropdown-menu dropdown-menu-end')}>
						{props?.selects?.map((item, i): JSX.Element => {
							return (
								<div
									key={i}
									className="dropdown-item"
									onClick={(e) => {
										e.stopPropagation();
										showSelectPannel(false);
										setValue({ ...value, select: item });
									}}
								>
									{item?.icon && props.selects[i]?.icon}
									<span>{item?.name}</span>
								</div>
							);
						})}
					</div>
				</button>
				{onModal && (
					<button data-bs-target={props?.nextModal?.target} data-bs-toggle="modal">
						<img src={props?.nextModal?.icon?.props?.src} />

						<span>{props.nextModal.name}</span>
						<ICONS.chevron_down className="gray-400" width="20" />
					</button>
				)}
			</div>
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
			{props.caption?.info && (
				<div className={'message-info-box'}>
					<ICONS.info width="16" />
					<p>{props.caption.info}</p>
				</div>
			)}
		</>
	);
};
export default DoubleInput;
