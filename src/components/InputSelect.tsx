import LOGOS from '@/assets/logos';
import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';

interface INPUT extends React.InputHTMLAttributes<HTMLInputElement> {
	caption?: CAPTION_MESSAGE;
	selects: SELECT_ITEM[];
	onValue?: (value: string | number | readonly string[], selectItem?: any) => void;
}

interface SELECT_ITEM {
	icon: JSX.Element;
	name: string;
	value: any;
}

declare interface CAPTION_MESSAGE {
	error?: string;
	success?: string;
	info?: string;
}

const InputSelect = (props: INPUT): JSX.Element => {
	const [selectItem, setSelectItem] = useState<any>(props?.selects?.length > 0 ? props?.selects[0].name : null);
	const inputRef = useRef<HTMLInputElement>(null);
	const [focus, setFocus] = useState<boolean>(false);

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

	useEffect(() => {
		if (!inputRef?.current?.value) return;

		props.onValue?.(inputRef.current.value, selectItem);
	}, [inputRef?.current?.value, selectItem]);

	console.log(inputRef);
	return (
		<>
			<div className={cx('cic-input-default', inputState(), props.className)}></div>
		</>
	);
};

export default InputSelect;
