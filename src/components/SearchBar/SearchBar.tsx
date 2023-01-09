import React, { useState } from 'react';
import SearchDeleteIcon from './SearchDeleteIcon';
import SearchGlassIcon from './SearchGlassIcon';

declare interface PROPS {
	defaultValue?: string;
	placeholder?: string;
}

const SearchBar = (props: PROPS) => {
	const { defaultValue, placeholder } = props;
	const [value, setValue] = useState(props.defaultValue ?? '');
	return (
		<>
			<SearchGlassIcon />
			<input
				type="text"
				value={value}
				placeholder={placeholder}
				// defaultValue={defaultValue}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
			<SearchDeleteIcon value={value} setValue={setValue} />
		</>
	);
};

export default SearchBar;
