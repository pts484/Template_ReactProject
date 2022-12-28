import LOGOS from '@/assets/logos';
import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';

interface INPUT extends React.InputHTMLAttributes<HTMLInputElement> {
	readOnly?: boolean;
	caption?: CAPTION_MESSAGE;
}

declare interface CAPTION_MESSAGE {
	error?: string;
	success?: string;
	info?: string;
}

const InputContainer = (props: INPUT): JSX.Element => {
	const [focus, setFocus] = useState<boolean>(false);

	const inputState = (): string => {
		let classStr = props.readOnly !== true ? '' : 'cic-input-default-read-only ';

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
	return (
		<>
			<div className={cx('cic-input-default', inputState(), props.className)}>{props.children}</div>
		</>
	);
};

export default InputContainer;
