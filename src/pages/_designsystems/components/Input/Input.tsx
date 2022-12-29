import React from 'react';

declare interface INPUT {
	readOnly?: boolean;
	placeholder?: string;
	defaultValue?: string;
}

const Input = (props: INPUT) => {
	const { readOnly, placeholder, defaultValue } = props;
	return (
		<>
			<input type="text" readOnly={!!readOnly} placeholder={placeholder} defaultValue={defaultValue} />
		</>
	);
};

export default Input;
