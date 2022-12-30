import React, { useEffect, useRef } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

declare interface TOOLTIP {
	className?: string;
	children?: JSX.Element;
	disabled?: boolean;
	html?: boolean;
	customClass?: string;
	title?: JSX.Element;
	ismobile?: boolean;
}

/******************************************************************************
 * 부트스트랩 5용 툴팁  >> 이거 사용하면 아코디언 동작 안함
 * helper : https://getbootstrap.com/docs/5.0/components/tooltips
 * @param props
 *
 * @returns JSX.Element
 *
 *

 *
 */
const TooltipWithBootstrap: React.FC<any> = (props: TOOLTIP): JSX.Element => {
	const baseRef = useRef(null as unknown as HTMLDivElement); // null as HTMLDivElement이 에러가 떠서 빠른수정으로 수정했습니다
	const { className, children, disabled = false, html = false, customClass = '', title = '' } = props;

	useEffect(() => {
		if (!baseRef || disabled) return;

		let options = {};
		if (html) {
			options = { title, html, customClass };
		} else {
			options = { title, html };
		}

		// const tooltip = new BootstrapTooltip(baseRef.current, options);
		// const tooltip = BootstrapTooltip.getInstance(baseRef.current);
		// const tooltip = BootstrapTooltip.getOrCreateInstance(baseRef.current, options);
		// return () => tooltip.dispose();
	}, [baseRef]);

	return (
		<div
			ref={baseRef}
			className={className}
			data-bs-toggle="tooltip"
			// data-bs-custom-class={html ? customClass : false}
			// data-bs-html={html}
			data-bs-title={title}
		>
			{children}
		</div>
	);
	// return React.cloneElement(children, { ref: baseRef });
};

//
const TooltipOverlay: React.FC<any> = (props: TOOLTIP): JSX.Element => {
	const { className, children, customClass = '', title = '', ismobile } = props;
	return !ismobile ? (
		<OverlayTrigger delay={{ show: 50, hide: 100 }} overlay={<Tooltip className={customClass}>{title}</Tooltip>}>
			<div className={className}>{children}</div>
		</OverlayTrigger>
	) : (
		<div className={className}>{children}</div>
	);
};

export default TooltipOverlay;
