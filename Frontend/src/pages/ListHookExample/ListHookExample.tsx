import React, { useEffect } from 'react';
import cx from 'classnames';
import './ListHookExample.module.scss';

import useList from '@hooks/useList/useList.hook';
import _ from 'lodash';

const ListHookExample = (): JSX.Element => {
	const { state, onRefresh, onChoice, onChecked, onUpdate, onAdd, onDelete, pages, movePage } = useList(
		'myMedia',
		{},
	);

	const dummyData: object[] = [
		{
			uuid: 0,
			id: 'user0',
			name: '조장주',
			nickname: 'j3',
		},
		{
			uuid: 1,
			id: 'user1',
			name: '박태순',
			nickname: 'pts',
		},
		{
			uuid: 2,
			id: 'user2',
			name: '이수호',
			nickname: 'lsh',
		},
		{
			uuid: 3,
			id: 'user3',
			name: '강현석',
			nickname: 'ghs',
		},
		{
			uuid: 4,
			id: 'user4',
			name: '이연지',
			nickname: 'lyj',
		},
		{
			uuid: 5,
			id: 'user5',
			name: '김종완',
			nickname: 'lyj',
		},
	];

	useEffect(() => {
		// 백앤드로부터 데이터를 불러옴 예시
		// 데이터 로딩 속도 0.523s
		setTimeout(() => {
			onRefresh(dummyData, 2);
		}, 523);
	}, []);

	return (
		<div className="container">
			<div className="w-100 my-2">
				<button
					className="btn btn-success"
					onClick={() => {
						console.log(dummyData);
						onAdd(_.sample(dummyData));
					}}
				>
					추가
				</button>
			</div>
			<ul className="list-group">
				{_.size(state.viewList) <= 0 && (
					<li className="list-group-item w-100 d-flex align-items-center justify-content-center">
						<div className="d-flex">Loading...</div>
					</li>
				)}
				{_.map(state.viewList, (item, key) => {
					return (
						<li
							key={key}
							className={cx(
								'list-group-item w-100 d-flex align-items-center',
								item.active && 'bg-warning',
							)}
							onClick={(e) => {
								console.log(item.active);
								onChoice(item.id);
							}}
						>
							<input
								className="me-4"
								type="checkbox"
								defaultChecked={item.checked}
								onChange={(e) => {
									e.stopPropagation();
									onChecked(item.id, e.target.checked);
									console.log(item.id, e.target.checked, 'checked : ', item.checked);
								}}
							/>
							<div className="d-flex w-25">{item.data.uuid}</div>
							<div className="d-flex w-25">{item.data.id}</div>
							<div className="d-flex w-25">{item.data.name}</div>
							<div className="d-flex w-25">{item.data.nickname}</div>
							<button
								className="btn btn-danger me-2"
								onClick={(e) => {
									console.log(dummyData);
									onDelete(e, item.id);
								}}
							>
								삭제
							</button>
						</li>
					);
				})}
			</ul>

			<ul className="pagination mt-5">
				<li className="page-item">
					<button
						type="button"
						className="page-link"
						aria-label="Previous"
						onClick={() => movePage(pages.posPrev)}
					>
						<span className="page-direction" aria-hidden="true">
							&lt;
						</span>
					</button>
				</li>

				{_.map(_.range(pages.posBegin, pages.posEnd, 1), (el) => (
					<li key={el} className="page-item">
						<button
							type="button"
							className={cx('page-link', pages.posCurrent === el && 'active')}
							onClick={() => movePage(el)}
						>
							{el + 1}
						</button>
					</li>
				))}

				<li className="page-item">
					<button
						type="button"
						className="page-link"
						aria-label="Next"
						onClick={() => movePage(pages.posNext)}
					>
						<span className="page-direction" aria-hidden="true">
							&gt;
						</span>
					</button>
				</li>
			</ul>
		</div>
	);
};

export default ListHookExample;
