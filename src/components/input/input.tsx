import LOGOS from '@/assets/logos';
import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';

interface INPUT extends React.InputHTMLAttributes<HTMLInputElement> {
	separator?: 'left' | 'right';
	onValue?: (value: string | number | readonly string[]) => void;
}

const Input = (props: INPUT): JSX.Element => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (!inputRef?.current?.value) return;

		props.onValue?.(inputRef.current.value);
	}, [inputRef?.current?.value]);

	return (
		<>
			{props.separator === 'left' && <div>|</div>}
			<input ref={inputRef} {...props} />
			{props.separator === 'right' && <div>|</div>}
		</>
	);
};

export default Input;
