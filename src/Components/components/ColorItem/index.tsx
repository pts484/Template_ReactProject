import React, { useEffect, useState } from 'react';

declare interface COLOR_ITEMS {
	colorCode: string;
	name: string;
	color?: string;
	tag?: string;
	tagColor?: string;
}

const ColorItem: React.FC<any> = (props: COLOR_ITEMS): JSX.Element => {
	const { colorCode, name, color, tag, tagColor } = props;
	const _color = color || colorCode;

	/**
	 * 로직 구현 없음
	 */

	return (
		<div className="row m-0">
			<div className="col p-0">
				<div style={{ background: colorCode, width: '50px', height: '50px', borderRadius: '4px' }}></div>
			</div>
			<div className="col px-0">
				<div className="row">
					<div className="col-12 subhead-01 text-900">{name}</div>
					<div className="col-12 caption text-600">{_color}</div>
					<div className="col-12 caption" style={{ color: tagColor }}>
						{tag}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ColorItem;
