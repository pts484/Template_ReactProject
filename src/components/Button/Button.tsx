import React from 'react';
import cx from 'classnames';
declare interface BUTTON {
	className?: string;
	children?: string | number | JSX.Element;
	style?: string;
	size?: string;
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	onSubmit?: React.FormEventHandler<HTMLButtonElement>;
}

const Button = (props: BUTTON) => {
	const { className, children, style, size, disabled, onClick, onSubmit } = props;

	const styleSwitch = () => {
		switch (style) {
			case 'filled':
				return 'btn-filled';
			case 'line':
				return 'btn-line';
			case 'grayline':
				return 'btn-grayline';
			case 'hover':
				return 'btn-hover';
			case 'grayfilled':
				return 'btn-grayfilled';
			default:
				return null;
		}
	};

	const sizeSwitch = () => {
		switch (size) {
			case 'lg':
				return 'lg';
			case 'md':
				return 'md';
			case 'sm':
				return 'sm';
			case 'xs':
				return 'xs';
			case 'sqr':
				return 'sqr';
			default:
				return null;
		}
	};
	return (
		<>
			<button
				className={cx(className, disabled && 'btn-disabled-lg', styleSwitch(), sizeSwitch())}
				onClick={onClick}
				onSubmit={onSubmit}
				disabled={!!disabled}
			>
				{children}
			</button>
		</>
	);
};

export default Button;
