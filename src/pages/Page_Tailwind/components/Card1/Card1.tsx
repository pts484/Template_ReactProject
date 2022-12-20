import React from 'react';
import { ReactComponent as Logo } from '@/assets/images/logo-chin-sqr.svg';

const Card1 = (): JSX.Element => {
	return (
		<>
			<ul className="test-card__wrap_01">
				<li>
					<Logo className="w-14" />
				</li>
				<li>
					<div className="test-card__title">카드 제목</div>
					<p className="text-slate-500">카드 컴포넌트 내용</p>
				</li>
			</ul>
		</>
	);
};

export default Card1;
