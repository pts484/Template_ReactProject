import React from 'react';
import ColerItem from '@/Components/components/ColorItem/index';

const ColorsTableView = () => (
	<div className="container">
		<h1>Colors</h1>
		<span className="subhead-long-03 gray-500">설명</span>
		<br />
		<br />
		<br />
		<hr />
		<br />
		{/* Header */}
		<div className="row row-cols-2 mb-3">
			<div className="col row row-cols-4">
				<div className="col">
					<span className="subhead-02">Neutral</span>
				</div>
				<div className="col">
					<span className="subhead-02">Text</span>
				</div>
				<div className="col">
					<span className="subhead-02">Primary</span>
				</div>
				<div className="col">
					<span className="subhead-02">Secondary</span>
				</div>
			</div>
			<div className="col row row-cols-4">
				<div className="col">
					<span className="subhead-02">Gold</span>
				</div>
				<div className="col">
					<span className="subhead-02">ETC</span>
				</div>
			</div>
		</div>
		<div className="row row-cols-2 mb-2">
			<div className="col row row-cols-4">
				<div className="col">
					<ColerItem colorCode={'#000000'} name={'black'} />
				</div>
				<div className="col">
					<ColerItem colorCode={'#242424'} name={'text-900'} />
				</div>
				<div className="col">
					<ColerItem colorCode={'#0C001D'} name={'pu-900'} />
				</div>
				<div className="col">
					<ColerItem colorCode={'#30002A'} name={'pk-900'} />
				</div>
			</div>
			<div className="col row row-cols-4">
				<div className="col">
					<ColerItem colorCode={'#EAC957'} color={'gradient'} name={'gd-01'} />
				</div>
				<div className="col">
					<ColerItem colorCode={'#F45F37'} name={'og-600'} />
				</div>
			</div>
		</div>
		<div className="row row-cols-2 mb-2">
			<div className="col row row-cols-4">
				<div className="col">
					<ColerItem colorCode={'#1D1B1F'} name={'gray-900'} />
				</div>
				<div className="col">
					<ColerItem colorCode={'#3D3D3D'} name={'text-800'} />
				</div>
				<div className="col">
					<ColerItem colorCode={'#170038'} name={'pu-800'} />
				</div>
				<div className="col">
					<ColerItem colorCode={'#630057'} name={'pk-800'} />
				</div>
			</div>
			<div className="col row row-cols-4">
				<div className="col">
					<ColerItem colorCode={'#967940'} color={'gradient'} name={'gd-02'} />
				</div>
				<div className="col">
					<ColerItem colorCode={'#FFB133'} name={'yw-600'} />
				</div>
			</div>
		</div>
		<div className="row row-cols-2 mb-2">
			<div className="col row row-cols-4">
				<div className="col">
					<ColerItem colorCode={'#28262B'} name={'gray-800'} />
				</div>
				<div className="col">
					<ColerItem colorCode={'#6F6F6F'} name={'text-700'} tag={'pressed'} tagColor={'#8E57E6'} />
				</div>
				<div className="col">
					<ColerItem colorCode={'#2E0C54'} name={'pu-700'} tag={'pressed'} tagColor={'#FF74ED'} />
				</div>
				<div className="col">
					<ColerItem colorCode={'#C900AF'} name={'pk-700'} />
				</div>
			</div>
			<div className="col row row-cols-4">
				<div className="col">
					<ColerItem colorCode={'#B39548'} color={'gradient'} name={'gd-03'} />
				</div>
			</div>
		</div>
		<div className="row row-cols-2 mb-2">
			<div className="col row row-cols-4">
				<div className="col">
					<ColerItem colorCode={'#4A4553'} name={'gray-600'} />
				</div>
				<div className="col">
					<ColerItem colorCode={'#7F7F7F'} name={'text-650'} />
				</div>
				<div className="col">
					<ColerItem colorCode={'#3D0F70'} name={'pu-650'} />
				</div>
				<div className="col">
					<ColerItem colorCode={'#FF63EB'} name={'pk-400'} tag={'main'} tagColor={'#FF74ED'} />
				</div>
			</div>
		</div>
	</div>
);

export default ColorsTableView;
