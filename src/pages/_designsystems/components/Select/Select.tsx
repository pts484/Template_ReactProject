import React, { useEffect, useState } from 'react';
import ICONS from '@assets/icons';
import cx from 'classnames';
import { motion } from 'framer-motion';

declare interface SELECT extends React.InputHTMLAttributes<HTMLInputElement> {
	children?: JSX.Element;
	selects: SELECTOR_ITEM[];
	disabled?: boolean;
	onValue?: (value: string | number | readonly string[] | Record<string, any>) => void;
}

declare interface SELECTOR_ITEM {
	icon?: any;
	name: string;
	value: any;
}

const Select: React.FC<any> = (props: SELECT): JSX.Element => {
	const { className, disabled } = props;
	const [view, setView] = useState(false);
	const [value, setValue] = useState<any>(
		props?.defaultValue ? props?.defaultValue : props?.selects?.length > 0 ? props?.selects[0] : null,
	);

	useEffect(
		() =>
			setValue(props?.defaultValue ? props?.defaultValue : props?.selects?.length > 0 ? props?.selects[0] : null),
		[props?.selects],
	);

	return (
		<>
			<div className="select-default">
				<button
					className={cx(className || 'cic-select-default-btn', disabled && 'cic-select-default')}
					type="button"
					onClick={() => {
						setView(!view);
						console.log(view);
					}}
				>
					{props.children ? (
						props.children
					) : (
						<div className="flex-container">
							<div>
								{value?.icon && value.icon}
								<span className="value-name">{value?.name ? value?.name : 'No Items'}</span>
							</div>
							{view ? <ICONS.chevronUp /> : <ICONS.chevronDown />}
						</div>
					)}
				</button>
				{view ? (
					<ul className={cx('cic-dropdown-pannel', props.disabled ? 'disabled' : null)}>
						{props?.selects.map((item, i): JSX.Element => {
							return (
								<li
									key={i}
									onClick={(e) => {
										setValue(item);
										props.onValue?.(item);
									}}
								>
									{item?.icon && item.icon}
									<span className="name">{item.name}</span>
								</li>
							);
						})}
					</ul>
				) : null}
			</div>
		</>
	);
};
export default Select;
