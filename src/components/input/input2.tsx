import LOGOS from '@/assets/logos';
import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';

interface INPUT extends React.InputHTMLAttributes<HTMLInputElement> {
	separator?: 'left' | 'right';
	onChange2?: (e: number) => void;
}

export function numberWithCommas(number: number | string, unit = '') {
	const _number = String(number);
	// if (!number) _number = '0.00';

	return _number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + unit;
}

const replacingNumber = (strNumber: string): number => {
	// console.log(strNumber.replace(',', ''));
	return Number(strNumber.replaceAll(',', ''));
};

const Input = (props: INPUT): JSX.Element => {
	const [text, setText] = useState('');

	useEffect(() => {}, [text]);

	return (
		<input
			{...props}
			value={text}
			placeholder={'aaaaa'}
			onChange={(e) => {
				if (props.type === 'number') {
					const regex = /[^0-9-.+]/g; // 숫자가 아닌 문자열을 선택하는 정규식
					const result = e.currentTarget.value.replace(regex, '');
					// const341 _number = Number('1000000');
					// console.log(numberWithCommas(e.currentTarget.value));
					// setText(replacingNumber(result)); // 오류로 주석처리 해둠.
					// props?.onChange2 && props.onChange2(replacingNumber(e.currentTarget.value));
					props?.onChange2 && props.onChange2(replacingNumber(e.currentTarget.value));
				}
			}}
		/>
	);
};

export default Input;
