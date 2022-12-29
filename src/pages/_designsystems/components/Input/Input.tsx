import React from 'react';

declare interface INPUT {
	readOnly?: boolean;
	placeholder?: string;
	defaultValue?: string;
	type?: string;
}

const Input = (props: INPUT) => {
	const { readOnly, placeholder, defaultValue, type } = props;
	return <input type={type} readOnly={!!readOnly} placeholder={placeholder} defaultValue={defaultValue} />;
};

export default Input;
