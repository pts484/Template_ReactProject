import React from 'react';
import cx from 'classnames';

declare interface CONTAINER {
	children: JSX.Element | JSX.Element[];
	focus?: boolean;
}

const SearchBarContainer = (props: CONTAINER): JSX.Element => {
	const { children, focus } = props;

	return (
		<div className={cx('cic-searchbar', focus && 'cic-searchbar-focus')}>
			{React.Children.map(children, (child) => React.cloneElement(child))}
		</div>
	);
};

export default SearchBarContainer;
