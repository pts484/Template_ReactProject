import React, { useState } from 'react';
import { ReactComponent as Logo } from '@/assets/images/logo-chin-sqr.svg';

const Card2 = (): JSX.Element => {
	return (
		<>
			<div className="test-card__wrap_02">
				<div className="w-full text-center space-y-2 flex justify-around items-center">
					<Logo className="w-14" />
					<div className="space-y-0.5">
						<p className="text-lg text-black font-semibold">Erin Lindford</p>
						<p className="text-slate-500 font-medium">Product Engineer</p>
						<div>
							<button className="test-card__button">Message</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card2;
