import React, { useEffect, useState, useRef } from 'react';
import cx from 'classnames';

import ICONS from '@/styles/icons';

declare interface SEARCH_BAR extends React.InputHTMLAttributes<HTMLInputElement> {
	selects?: SELECTOR_ITEM[];
	onValue?: (value: string | number | readonly string[] | null, selValue?: any) => any;
	onClear?: (value: string | number | readonly string[] | null) => any;
	onEnter?: (value: string | number | readonly string[] | null, selValue?: any) => any;
	register?: any;
}

declare interface SELECTOR_ITEM {
	icon?: any;
	name: string;
	value: any;
	count?: string | number;
}

const SearchBar: React.FC<any> = (props: SEARCH_BAR): JSX.Element => {
	const inputRef = useRef(null);
	const selectPannelRef = useRef(null);

	const [value, setValue] = useState<string | number | readonly string[]>(
		props.defaultValue ? props.defaultValue : '',
	);
	const [selValue, setSelectValue] = useState<any>(props?.selects?.length > 0 ? props?.selects[0] : null);

	const [focus, setFocus] = useState<boolean>(false);
	const [togglePannel, showSelectPannel] = useState<boolean>(false);

	const { selects, onValue, onClear, onEnter, register, ..._spreadProps } = props;

	/**
	 * 영역 밖을 클릭했을 시 SelectPannel 닫기
	 */
	const closePannelHandler = (e) => {
		if (selectPannelRef.current && !selectPannelRef.current.contains(e.target)) showSelectPannel(false);
	};

	useEffect(() => {
		document.addEventListener('click', closePannelHandler);
		return () => document.removeEventListener('click', closePannelHandler);
	}, []);

	return (
		<div className={cx('searchbar', focus && 'searchbar-focus', props.className)}>
			<input
				ref={inputRef}
				{..._spreadProps}
				value={value}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setValue(e.currentTarget.value);
					showSelectPannel(!!(props.selects && e.currentTarget.value?.length > 0));
					props?.onChange && props.onChange(e);
					props?.onValue && props.onValue(e.currentTarget.value, selValue);
				}}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				onKeyPressCapture={(e) => {
					if (e.key.toLocaleLowerCase() === 'enter') {
						props?.onEnter && props?.onEnter(e.currentTarget.value, selValue);
					}
				}}
			/>
			<div className="clear">
				{value && (
					<button
						onClick={() => {
							inputRef.current.value = '';
							setValue('');
							props.onClear && props.onClear('');
						}}
					>
						<ICONS.x />
					</button>
				)}
			</div>
			<div>
				<ICONS.search className="search-icon" />
			</div>

			{props.selects && togglePannel && (
				<div className="row row-cols-1 dropdown-pannel w-100" ref={selectPannelRef}>
					{/* dropdown Header */}
					<div className="col dropdown-item subhead-01 text-600">Collections</div>

					{/* dropdown No Items */}
					{props.selects.length <= 0 && <div className="col dropdown-item subhead-01 py-3">No Items...</div>}

					{/* {/* dropdown List */}
					{props.selects.map((item, i): JSX.Element => {
						return (
							<div
								key={i}
								className="col dropdown-item detail"
								onClick={(e) => {
									e.stopPropagation();
									showSelectPannel(false);
									setSelectValue(item);
									props.onValue && props.onValue(inputRef.current.value, item);
								}}
							>
								{item?.icon ? (
									<img className="icon" src={item?.icon} />
								) : (
									<ICONS.empty_thumb className="icon" />
								)}
								<span className="name subhead-02 text-800">{item.name}</span>
								{item.count && <span className="subhead-02 text-600">{item.count} items</span>}
							</div>
						);
					})}

					{/* dropdown Footer */}
					<div className="col dropdown-item subhead-01 text-600">Press Enter to search all items</div>
				</div>
			)}
		</div>
	);
};
export default SearchBar;
