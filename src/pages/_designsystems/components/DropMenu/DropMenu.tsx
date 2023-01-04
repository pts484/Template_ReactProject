import React, { useEffect, useRef, useState } from 'react';
import ICONS from '@assets/icons';
import cx from 'classnames';
import { motion } from 'framer-motion';

declare interface DROPDOWN extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: string | JSX.Element;
	contents: DROPDOWN_ITEM[];
	dropup?: boolean;
	borderNone?: boolean;
	// dropmenuTitle: string | JSX.Element;
}

declare interface DROPDOWN_ITEM {
	icon?: JSX.Element;
	content: JSX.Element;
}

const DropMenu = (props: DROPDOWN): JSX.Element => {
	const outsideRef = useRef<HTMLDivElement | null>(null);
	const { className, dropup, children, borderNone } = props;
	const [visible, setVisible] = useState(false);

	const isVisible = (e) => {
		setVisible(!visible);
	};

	// dropmenu 외부 클릭 시 닫히도록 하는 함수. useRef와 같이 사용 됨.
	useEffect(() => {
		function handleClickOutside(e: any) {
			if (outsideRef.current && !outsideRef.current.contains(e.target)) setVisible(false);
		}
		window.addEventListener('click', handleClickOutside);
		return () => window.removeEventListener('click', handleClickOutside);
	}, [outsideRef]);

	return (
		<>
			<div className={cx('cic-dropmenu-wrap', dropup && 'dropup', visible && 'show')} ref={outsideRef}>
				<button
					className={cx(borderNone ? 'cic-dropmenu-transparent' : 'cic-dropmenu-default')}
					onClick={isVisible}
				>
					<span>{children}</span>
				</button>
				<ul className={cx('cic-dropmenu-contents')}>
					{props?.contents.map((item, i) => {
						return (
							<li className="cic-dropmenu-content" key={i} onClick={isVisible}>
								{item.content}
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};
export default DropMenu;
