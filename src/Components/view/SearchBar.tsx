import React from 'react';
import cx from 'classnames';

import SearchBar from '../components/SearchBar';
import ICONS from '@/styles/icons';

const SearchBarView = () => (
	<div className="container">
		<h1>Search Bar</h1>
		<span className="subhead-long-03 gray-500">설명</span>
		<br />
		<br />
		<br />
		<hr />
		<br />
		{/* Header */}
		<div className="row row-cols-4 mb-3">
			<div className="col">
				{/* 샘플 1 */}
				<div className="searchbar">
					<div>
						<ICONS.search />
					</div>
					<input placeholder="플레이스 홀더" />
				</div>
			</div>
			<div className="col">
				{/* 샘플 2 */}
				<div className={cx('searchbar', 'searchbar-focus')}>
					<div>
						<ICONS.search />
					</div>
					<input placeholder="플레이스 홀더" defaultValue="검색어 입력 중" />
					<div>
						<button>
							<ICONS.x />
						</button>
					</div>
				</div>
			</div>
			<div className="col">
				{/* 샘플 3 */}
				<div className={cx('searchbar')}>
					<div>
						<ICONS.search />
					</div>
					<input placeholder="플레이스 홀더" defaultValue="검색어 입력" />
					<div>
						<button>
							<ICONS.x />
						</button>
					</div>
				</div>
			</div>

			<div className="col">
				<SearchBar placeholder="플레이스 홀더" defaultValue="검색어1" />
			</div>
		</div>
	</div>
);

export default SearchBarView;
