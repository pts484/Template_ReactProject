/**
 * 커스텀 인풋 (디자인시스템 적용)
 */
import React, { cloneElement, useEffect, useRef } from 'react';
import cx from 'classnames';
import { v4 as uuid } from 'uuid';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

declare interface TOOLTIP {
	className?: string;
	children?: JSX.Element;
	disabled?: boolean;
	html?: boolean;
	customClass?: string;
	title?: JSX.Element;
	placement?: 'top' | 'right' | 'bottom' | 'left';
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
 * example 1  *****
 *  <Tooltip
 *      className="myclass"
 *      title={`더 세밀한 정렬을 원하시면 지불수단 정렬을 1개 선택한 후 확인해주세요.`}
 *  >
 *      Example Tooltip with Bootstrap5
 *  </Tooltip>
 *
 * example 2  *****
 *  <Tooltip
 *      className="myclass"
 *      html={true}
 *      customClass="balloon-box"
 *      title={`<div>더 세밀한 정렬을 원하시면 지불수단정렬을 1개 선택한 후 확인해주세요.</div>`}
 *  >
 *      Example Tooltip with Bootstrap5
 *  </Tooltip>
 *
 */
const TooltipWithBootstrap: React.FC<any> = (props: TOOLTIP): JSX.Element => {
	const baseRef = useRef(null as unknown as HTMLDivElement);
	// const baseRef = useRef(null as HTMLDivElement);
	const {
		className,
		children,
		disabled = false,
		placement = 'top',
		html = false,
		customClass = '',
		title = '',
	} = props;

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
			data-bs-placement={placement}
			// data-bs-custom-class={html ? customClass : false}
			// data-bs-html={html}
			data-bs-title={title}
		>
			{children}
		</div>
	);
	// return React.cloneElement(children, { ref: baseRef });
};

const TooltipOverlay: React.FC<any> = (props: TOOLTIP): JSX.Element => {
	const { className, children, placement = 'top', customClass = '', title = '', ismobile } = props;
	return !ismobile ? (
		<OverlayTrigger
			placement={placement}
			delay={{ show: 50, hide: 100 }}
			overlay={<Tooltip className={customClass}>{title}</Tooltip>}
		>
			<div className={className}>{children}</div>
		</OverlayTrigger>
	) : (
		<div className={className}>{children}</div>
	);
};

export default TooltipOverlay;
