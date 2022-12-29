import React from 'react';
import cx from 'classnames';
declare interface Container {
	children: JSX.Element | JSX.Element[];
	// children: JSX.Element;
	className?: string;
	readOnly?: boolean;
	focus?: boolean;
	success?: boolean;
	error?: boolean;
}

const InputContainer = (props: Container): JSX.Element => {
	const { className, readOnly, focus, success, error, children } = props;
	return (
		<div
			className={cx(
				className || 'cic-input-default',
				readOnly && 'cic-input-read-only',
				focus && 'cic-input-focus',
				success && 'cic-input-success',
				error && 'cic-input-error',
			)}
		>
			{React.Children.map(children, (child) => React.cloneElement(child, { readOnly }))}
		</div>
	);
};

export default InputContainer;
