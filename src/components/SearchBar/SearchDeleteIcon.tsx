import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel, faDeleteLeft, faX } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

declare interface PROPS {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchDeleteIcon = (props: PROPS) => {
	const { value, setValue } = props;
	return (
		<FontAwesomeIcon
			icon={faX}
			className={cx('cic-icon-x', value ? 'visibility' : 'hidden')}
			onClick={(e) => {
				setValue('');
			}}
		/>
	);
};

export default SearchDeleteIcon;
