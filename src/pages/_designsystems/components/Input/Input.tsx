import React from 'react';

declare interface INPUT extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string;
	defaultValue?: string;
	type?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = (props: INPUT) => {
	// const { readOnly, placeholder, defaultValue, type, onChange } = props;
	return (
		<input
			type={props.type}
			readOnly={!!props.readOnly}
			placeholder={props.placeholder}
			defaultValue={props.defaultValue}
			onChange={props.onChange}
		/>
	);
};

export default Input;
