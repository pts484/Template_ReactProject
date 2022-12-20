import React from 'react';
import Card1 from './components/Card1/Card1';
import Card2 from './components/Card2/Card2';

const Tailwind = (): JSX.Element => {
	return (
		<div>
			<section className="text-center m-auto w-full">
				<h3 className="test-title">섹션임!</h3>
				<Card1 />
				<Card2 />
			</section>
		</div>
	);
};

export default Tailwind;
