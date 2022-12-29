import LOGOS from '@/assets/logos';
import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import InputContainer from '@/components/input/input_container';
import Input from '@/components/input/input';
import Select from '@/components/input/select';

interface INPUT extends React.InputHTMLAttributes<HTMLInputElement> {
	caption?: CAPTION_MESSAGE;
	selects: SELECT_ITEM[];
	onValue?: (value: string | number | readonly string[], selectItem?: any) => void;
	readOnly?: boolean;
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
	const { className, selects, caption, onValue, ...spreadProps } = props;

	return (
		<InputContainer readOnly={props.readOnly}>
			<Select selects={props.selects} disabled={props.readOnly}></Select>
			<Input readOnly={props.readOnly} separator="left" />
			<Input readOnly={props.readOnly} />
			<Input readOnly={props.readOnly} separator="left" />
			<Input readOnly={props.readOnly} />
		</InputContainer>
	);
};

export default InputSelect;
