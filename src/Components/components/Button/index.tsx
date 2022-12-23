import React, { Children, useEffect, useState } from 'react';
import cx from 'classnames';

declare interface BUTTON extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: JSX.Element;
}

const Button: React.FC<any> = (props: BUTTON): JSX.Element => {
	const [disabled, setDisabled] = useState<boolean>(false);

	const clickHandeler = (e: any): any => {
		setDisabled(true);
		if (!props.onClick) {
			setTimeout(() => setDisabled(false), 3000);
			return;
		}
		props.onClick(e);
		setDisabled(false);
	};

	return (
		<button {...props} className={cx(props.className, disabled ? 'btn-grayfilled-lg' : '')} onClick={clickHandeler}>
			{props.children}
		</button>
	);
};
export default Button;
/**
 * 검색에 쓰이는 돋보기 아이콘 SVG
 */
const ICON_SEARCH = (): JSX.Element => (
	<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M0.5 2C0.5 1.46957 0.710714 0.960859 1.08579 0.585787C1.46086 0.210714 1.96957 0 2.5 0H12.5C13.2072 0 13.8855 0.280951 14.3856 0.781048C14.8857 1.28115 15.1667 1.95942 15.1667 2.66667V3.024C15.572 3.25804 15.9087 3.59467 16.1427 4.00004C16.3768 4.40541 16.5 4.86525 16.5 5.33333V13.3333C16.5 14.0406 16.219 14.7189 15.719 15.219C15.2189 15.719 14.5406 16 13.8333 16H3.83333C2.94928 16 2.10143 15.6488 1.47631 15.0237C0.851189 14.3986 0.5 13.5507 0.5 12.6667V2ZM1.83333 2C1.83333 2.17681 1.90357 2.34638 2.0286 2.4714C2.15362 2.59643 2.32319 2.66667 2.5 2.66667H13.8333C13.8333 2.31304 13.6929 1.97391 13.4428 1.72386C13.1928 1.47381 12.8536 1.33333 12.5 1.33333H2.5C2.32319 1.33333 2.15362 1.40357 2.0286 1.5286C1.90357 1.65362 1.83333 1.82319 1.83333 2ZM11.8333 8C11.6565 8 11.487 8.07024 11.3619 8.19526C11.2369 8.32029 11.1667 8.48986 11.1667 8.66667C11.1667 8.84348 11.2369 9.01305 11.3619 9.13807C11.487 9.2631 11.6565 9.33333 11.8333 9.33333H13.1667C13.3435 9.33333 13.513 9.2631 13.6381 9.13807C13.7631 9.01305 13.8333 8.84348 13.8333 8.66667C13.8333 8.48986 13.7631 8.32029 13.6381 8.19526C13.513 8.07024 13.3435 8 13.1667 8H11.8333Z"
			fill="white"
		/>
	</svg>
);
