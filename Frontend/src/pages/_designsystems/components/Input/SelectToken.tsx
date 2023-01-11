import LOGOS from '@/assets/logos';
import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';

interface INPUT extends React.InputHTMLAttributes<HTMLInputElement> {
	selects: SELECT_ITEM[];
}

interface SELECT_ITEM {
	icon: JSX.Element;
	name: string;
	value: any;
}

const SelectToken = (props: INPUT): JSX.Element => {
	const [selectItem, setSelectItem] = useState<any>(props?.selects?.length > 0 ? props?.selects[0].name : null);

	return (
		<>
			<button
				className="dropdown-toggle cic-input-select"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
				disabled={props.readOnly || props.disabled}
			>
				{props?.selects[0].icon}
				<span className="d-flex align-items-center">{selectItem}</span>
			</button>
			<ul className="dropdown-menu">
				{props.selects?.map((item, i): JSX.Element => {
					return (
						<li className="dropdown-item" key={i}>
							{item.icon}
							<span>{item.name}</span>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default SelectToken;