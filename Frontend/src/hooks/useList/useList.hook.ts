/**
 * @title List 구현을 위한 React Custom Hook
 * @author pts
 * @date 210728
 * @update 220110
 * @version 1.0.2
 * @description 리스트,검색,페이지네이션
 */

import { useReducer, useCallback, useState } from 'react';
import _, { isNull } from 'lodash';
import qs from 'qs';

interface ISvgObj {
	[key: string]: Record<string, any>; // ⭐⭐⭐ index signature
}

/**
 * 게시판 타입
 */
enum VIEW_TYPE {
	LIST = 0, // 리스트형
	CARD, // 카드 배열형
	GALLARY, // 이미지 겔러리형
	GRID, // 격자 배열형
}

/**
 * 검색 옵션
 */
export declare interface SEARCH {
	inSearch: boolean;
	dataKey: string | null; // 검색 종류
	word: string | null; // 검색어
	startDate?: string; // 검색날짜 부터
	endDate?: string; // 검색날짜 까지
	sortKey?: string | null;
	sortValue?: 'desc' | 'asc';
}

declare interface ITEM {
	id: string;
	checked: boolean;
	active: boolean;
	data: any;
}

interface LIST {
	[key: string]: ITEM;
}

/**
 * 페이지네이션
 */
declare interface PAGINATION {
	cntPrint: number; // 게시판 한페이지에 출력할 item 갯수
	// cnt_viewList: number; // STATE length와 동일
	pageSideLength: number; // 현제 페이지 버튼 양 사이드에 출력할 페이지 넘버 버튼 갯수

	listBeginIterator: ITEM | null; // 게시판 리스트 0번째 item
	listEndIterator: ITEM | null; // 게시판 리스트 마지막 item

	posCurrent: number; // 현재 출력중이 페이지 넘버
	posFirst: number; // 모든 리스트 중 페이지의 가장 처음 (즉 0)
	posLast: number; // 모든 리스트 중 페이지의 가장 마지막 (즉 리스트전체길이 / 표시리스트 갯수)
	posBegin: number; // 표시된 페이지네이션의 처음
	posEnd: number; // 표시된 페이지네이션의 끝
	posPrev: number; // posCurrent - 1
	posNext: number; // posCurrent + 1
}

/**
 * 관리형 상태 구조
 */
declare interface STATE {
	// 게시판이 가지는 고유 아이디
	uuid: string;
	checkedAll: boolean;
	// length: number; // 리스트 데이터 갯수
	viewType: VIEW_TYPE; // 게시판 출력 타입
	search: SEARCH; // 검색 구조체
	pagination: PAGINATION; // 페이지네이션

	/**
	 * 리스트는 3단계로 구성
	 */

	// 리스트 구성을 위한 원본 데이터
	rawData: any[] | Array<Record<string, any>> | LIST;

	// 패키징 이후 sort, search에 의해 변경된 리스트
	itemList: LIST;

	// list를 pagination을 이용해 출력 할 데이터만 구성
	viewList: LIST;
}

/** * ACTIONS ******************************************************* */
const CALLBACK = 'CALLBACK';
const REFRESH = 'REFRESH';
const ADD = 'ADD';
const APPEND = 'APPEND';
const CHECK = 'CHECK';
const CHECK_ALL = 'CHECK_ALL';
const CHECK_LIST_ALL = 'CHECK_LIST_ALL';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';
const MOVE_PAGE = 'MOVE_PAGE';
const SET_SEARCH = 'SET_SEARCH';
const SEARCH_DATA = 'SEARCH';
const SEARCH_MISSION = 'SEARCH_MISSION';
const SORT = 'SORT';

/** ***************************************************************** */

/**
 * 데이터 관리 목적의 초기화 -- ** 내부 함수 **
 * @param data 배열 또는 객체형 파라미터
 * @returns 초기화 STATE 객체
 */
const initialize = (uuid: string, initData: STATE, option?: any): STATE => {
	const defaultState: any = {
		list: {},
		uuid,
		checkedAll: false,
		viewType: VIEW_TYPE.LIST,
		search: {
			inSearch: false,
			dataKey: '',
			word: '',
			startDate: null,
			endDate: null,
			sortKey: '',
			sortValue: 'desc',
		},
		pagination: {
			cntPrint: 10,
			pageSideLength: 4,
			listBeginIterator: null,
			listEndIterator: null,
			posCurrent: 0,
			posFirst: 0,
			posLast: 0,
			posBegin: 0,
			posEnd: 0,
			posPrev: 0,
			posNext: 0,
		},
		rawData: {},
		itemList: {},
		viewList: {},
	};

	return _.merge(defaultState, initData);
};

const calculatePages = (state: STATE, currentPageNumber: number): PAGINATION => {
	const obj: PAGINATION = {
		...state.pagination,
	};

	currentPageNumber = Number(currentPageNumber);

	const listSize = _.size(state.itemList);

	obj.listBeginIterator = state.itemList[0];
	obj.listEndIterator = state.itemList[listSize - 1];

	obj.posFirst = 0;
	obj.posLast = Math.ceil(listSize / obj.cntPrint);

	obj.posPrev = currentPageNumber < 1 ? 0 : currentPageNumber - 1;
	obj.posNext = currentPageNumber >= obj.posLast - 1 ? obj.posLast - 1 : currentPageNumber + 1;

	obj.posCurrent = currentPageNumber < 0 ? 0 : currentPageNumber;
	obj.posCurrent = currentPageNumber >= obj.posLast ? obj.posLast : currentPageNumber;

	obj.posBegin = currentPageNumber - obj.pageSideLength > 0 ? currentPageNumber - obj.pageSideLength : 0;

	obj.posEnd = obj.posNext + obj.pageSideLength;
	if (obj.posEnd >= obj.posLast) {
		obj.posEnd = obj.posLast;
	}

	// 주소창에 페이지네이션 위치 쿼리스트일 입력
	const thisQsPage: any = qs.parse(window.location?.search, { ignoreQueryPrefix: true });
	thisQsPage[state.uuid] = currentPageNumber + 1;

	window.history.replaceState({}, '', window.location.pathname + '?' + qs.stringify(thisQsPage));

	return obj;
};

const updateViewlist = (state: STATE, currentPageNumber: number): LIST => {
	const _key = Object.keys(state.itemList);
	const _keyLength = _key.length;
	if (_keyLength <= 0) return {};

	/* viewList 구성 */
	const viewList = {};
	const i = currentPageNumber * state.pagination.cntPrint;
	const loopLen = _keyLength < state.pagination.cntPrint ? _keyLength : state.pagination.cntPrint;

	for (let j = 0; j < loopLen; ++j) {
		if (i + j >= _keyLength) break;
		viewList[_key[i + j]] = state.itemList[_key[i + j]];
	}

	return viewList;
};

const resetLists = (state: STATE) => {
	const obj = {
		...state,
	};

	// 다시 리스트 패키징
	// obj.rawData = action.data; //원본은 변경하지 않음
	obj.itemList = {};

	_.forEach(obj.rawData, (el, key) => {
		const _item = {
			id: key,
			checked: false,
			active: false,
			data: el,
		};
		obj.itemList[key] = _item;
	});

	obj.pagination = calculatePages(obj, 0);
	obj.viewList = updateViewlist(obj, 0);

	return {
		...obj,
	};
};

const updateList = (state: STATE, tmpItemlist: any[] | Array<Record<string, any>> | any, currentPageNumber: number) => {
	const obj = {
		...state,
	};

	// 리스트 패키징
	obj.itemList = {};
	obj.viewList = {};

	let length = 0;
	_.forEach(tmpItemlist, (el, key) => {
		const _item: ITEM = {
			id: String(key),
			checked: false,
			active: false,
			data: _.cloneDeep(el),
		};
		obj.itemList[key] = _item;
		if (length++ < state.pagination.cntPrint) {
			obj.viewList[key] = _item;
		}
	});

	obj.pagination = calculatePages(obj, currentPageNumber);
	obj.pagination.cntPrint = state.pagination.cntPrint;
	obj.viewList = updateViewlist(obj, currentPageNumber);

	return {
		...obj,
	};
};

const refresh = (state: STATE, action: Record<string, any>) => {
	const obj = {
		...state,
	};

	// 리스트 패키징
	obj.rawData = action.data;
	obj.itemList = {};
	obj.viewList = {};

	_.forEach(action.data, (el, key) => {
		const _item = {
			id: key,
			checked: false,
			active: false,
			data: _.cloneDeep(el),
		};
		obj.itemList[key] = _item;
	});

	obj.pagination.cntPrint = action.length;
	const thisQsPage: any = qs.parse(window.location?.search, { ignoreQueryPrefix: true });
	const currentPageNumber = thisQsPage[state.uuid] ? thisQsPage[state.uuid] - 1 : obj.pagination.posCurrent;

	const _pagination = calculatePages(obj, currentPageNumber);
	obj.viewList = updateViewlist(obj, currentPageNumber);

	return {
		...obj,
		pagination: _pagination,
	};
};

// const update = (state: STATE, action: Record<string, any>) => {

// };

const reducer = (state: STATE, action: Record<string, any>): STATE => {
	switch (action.type) {
		case CALLBACK: {
			action.callback(state);
			return state;
		}
		case REFRESH: {
			// state.length = action.length;
			const _refreshList = refresh(state, action);

			return {
				..._refreshList,
			};
		}
		case ADD: {
			return {
				...state,
				// length: state.length + 1,
				itemList: {
					...state.itemList,
					[action.id]: {
						id: action.id,
						checked: false,
						active: false,
						data: action.data,
					},
				},
			};
		}
		case APPEND: {
			const _tmpState: STATE = { ...state };

			const currentListSize = _.size(_tmpState.itemList);
			const _tmpList: ISvgObj = {};
			const _tmpViewList: ISvgObj = {};

			// _.forEach(action.data, (el, i) => {
			//     const appendKey = currentListSize + i;
			//     const _item = {
			//         id: appendKey,
			//         checked: false,
			//         active: false,
			//         data: el,
			//     };
			//     _tmpList[appendKey] = _item;
			//     _tmpViewList[appendKey] = _item;
			// });

			// _tmpState.list = { ..._tmpState.list, ..._tmpList };
			// _tmpState.viewList = { ..._tmpState.viewList, ..._tmpViewList };
			// _tmpState.pagination = calculatePages(_tmpState, _tmpState.pagination.posCurrent);

			return _tmpState;
		}
		case CHECK: {
			state.itemList[action.id].checked = action.checked;
			return {
				...state,
			};
		}
		case CHECK_ALL: {
			_.forEach(state.viewList, (el) => {
				el.checked = action.checked;
			});

			return {
				...state,
				checkedAll: !!action.checked,
			};
		}
		case CHECK_LIST_ALL: {
			_.forEach(state.itemList, (el) => {
				el.checked = action.checked;
			});

			return {
				...state,
				checkedAll: !!action.checked,
			};
		}
		case UPDATE: {
			state.itemList[action.id].data = action.data;
			return {
				...state,
			};
		}
		case DELETE: {
			delete state.viewList[action.id];
			delete state.itemList[action.id];
			return {
				...state,
			};
		}
		case MOVE_PAGE: {
			const _key = Object.keys(state.itemList);
			const _keyLength = _key.length;
			if (_keyLength <= 0)
				return {
					...state,
				};

			const obj = calculatePages(state, action.posCurrent);
			state.pagination = obj;

			/* viewList 구성 */
			state.viewList = {};
			const i = action.posCurrent * state.pagination.cntPrint;
			const loopLen = _keyLength < state.pagination.cntPrint ? _keyLength : state.pagination.cntPrint;

			for (let j = 0; j < loopLen; ++j) {
				if (i + j >= _keyLength) break;
				state.viewList[_key[i + j]] = state.itemList[_key[i + j]];
			}

			return {
				...state,
			};
		}
		case SET_SEARCH: {
			const newSearch: any = {
				...state.search,
				...action.search,
			};

			return {
				...state,
				search: newSearch,
			};
		}
		case SEARCH_DATA: {
			// 검색시 정렬은 초기화 한다.
			const _search: any = {
				...state.search,
				...action.search,
				// sortKey: '',
				// sortValue: 'desc',
			};

			// 결과내 검색일 경우 rawData를 이용해 리스트 재구성.
			if (_search.inSearch) {
				console.log('inSearch');

				const _tempFilter = _.filter(state.rawData, (el: ITEM, i) => {
					return el[_search.dataKey].toString().indexOf(_search.word) > -1;
				});

				if (_search.word) {
					return {
						...updateList(state, _tempFilter, 0),
					};
				} else {
					// 검색어가 없을때 초기화
					console.log('no word');
					return {
						...resetLists(state),
						// search: _search,
					};
				}
			} else {
				console.log('inSearch is false');
				return {
					...state,
					search: _search,
				};
			}
		}
		case SEARCH_MISSION: {
			// Custom Search
			const { search } = action;
			let _tempFilter = state.rawData;

			// 미션 상태 분류 (미션 진행중)
			if (search?.missionType.value === 0) {
				_tempFilter = _.filter(
					_tempFilter,
					(el: any, i) =>
						el?.mis_end === 0 &&
						new Date(el.mis_enddate.replace('Z', '')).getTime() - new Date().getTime() > 0,
				);
			}

			// 마감 임박
			if (search?.missionType.value === 2) {
				_tempFilter = _.filter(
					_tempFilter,
					(el: any, i) =>
						new Date(el.mis_enddate.replace('Z', '')).getTime() - new Date().getTime() <=
							1000 * 60 * 60 * 24 * 2 &&
						new Date(el.mis_enddate.replace('Z', '')).getTime() - new Date().getTime() > 0 &&
						el?.mis_end === 0,
				);
			}

			// 오픈 예정
			if (search?.missionType.value === 3) {
				_tempFilter = _.filter(
					_tempFilter,
					(el: any, i) => new Date(el.mis_opendate.replace('Z', '')).getTime() - new Date().getTime() > 0,
				);
			}

			// 미션 상태 분류 (마감된 미션)
			if (search?.missionType.value === 1) {
				_tempFilter = _.filter(
					_tempFilter,
					(el: any, i) =>
						el?.mis_end === 1 ||
						new Date(el.mis_enddate.replace('Z', '')).getTime() - new Date().getTime() <= 0,
				);
			}

			// 미션 플랫폼 분류
			if (search?.platforms.value !== '_all') {
				_tempFilter = _.filter(_tempFilter, (el: any, i) => el?.wht_id === search.platforms.value);
			}

			// 미션 보상 토큰 분류
			if (search?.tokens.value !== '_all') {
				_tempFilter = _.filter(_tempFilter, (el: any, i) => el?.mis_token_address === search.tokens.value);
			}

			// 미션 이름 검색 분류
			if (search.word) {
				_tempFilter = _.filter(_tempFilter, (el: any, i) => {
					return el?.mis_title?.indexOf(search.word) > -1;
				});
			}

			return {
				...updateList(state, _tempFilter, 0),
			};
		}
		case SORT: {
			let orderby = 'desc';
			// 소트 타입이 이전과 같으면 orderby를 역전
			// if (action.search.sortValue === state.search.sortValue) {
			orderby = state.search.sortValue === 'desc' ? 'asc' : 'desc';
			// }

			const _searchSort: any = {
				...state.search,
				// sortKey: action.search.sortKey ? action.search.sortKey : '',
				sortValue: orderby,
			};

			if (state.search.inSearch) {
				// state.itemList sortKey, asc 기준으로 정렬한다.
				let sortedList: ITEM[] = _.sortBy(state.itemList, [
					(el) => {
						if (state?.search?.sortKey) return el.data[state.search.sortKey];
					},
				]);
				// orderby 가 desc(내림차순)이면 정렬한 리스트를 역전
				if (orderby === 'desc') sortedList = _.reverse(sortedList);

				const _sortlist: ITEM[] = [];
				_.forEach(sortedList, (el, i) => (_sortlist[i] = el.data));

				return {
					...updateList(state, _sortlist, 0),
					search: _searchSort,
				};
			} else {
				console.log('no sort');

				return {
					...state,
					search: _searchSort,
				};
			}
		}
		default: {
			return state;
		}
	}
};

function useList(uuid: string, initialData: any) {
	const [state, dispatch] = useReducer(reducer, initialize(uuid, initialData));
	const [nextId, setNextId] = useState(Number(_.size(initialize(uuid, initialData).itemList)) + 1);

	const getCheckItems = useCallback(() => {
		const pArr: Record<string, any> = {};

		_.forEach(state.itemList, (el: ITEM, i) => {
			if (el.checked) {
				pArr[i] = el;
			}
		});
		return pArr;
	}, [state]);

	const setSearch = useCallback(
		(obj: SEARCH): any => {
			dispatch({
				type: SET_SEARCH,
				search: obj,
			});

			return obj;
		},
		[state.search],
	);

	const onSearch = useCallback(
		(obj: SEARCH): any => {
			dispatch({
				type: SEARCH_DATA,
				search: obj,
			});
		},
		[state.search],
	);

	const onSearchMission = useCallback(
		(obj: any): any => {
			dispatch({
				type: SEARCH_MISSION,
				search: obj,
			});
		},
		[state.search],
	);

	const onSort = useCallback(
		(obj: SEARCH): any => {
			dispatch({
				type: SORT,
				search: obj,
			});
		},
		[state.search],
	);

	const onChoice = useCallback(
		(id: string | number): ITEM => {
			_.forEach(state.itemList, (el: ITEM) => {
				el.active = false;
			});

			state.itemList[id].active = true;
			return state.itemList[id];
		},
		[state],
	);

	const onResetChoice = useCallback((): void => {
		_.forEach(state.itemList, (el: ITEM) => {
			el.active = false;
		});
	}, [state]);

	/**
	 * reducer dispatch
	 */
	const onCheckedAll = useCallback((checked): void => {
		dispatch({
			type: CHECK_ALL,
			checked,
		});
	}, []);

	const onCheckedListAll = useCallback((checked): void => {
		dispatch({
			type: CHECK_LIST_ALL,
			checked,
		});
	}, []);

	const onRefresh = useCallback((data: any[] = [], count: number = 10): void => {
		setNextId(_.size(data));
		dispatch({
			type: REFRESH,
			data,
			length: count,
		});
	}, []);

	const onChecked = useCallback((id: string | number, checked: boolean): void => {
		dispatch({
			type: CHECK,
			id,
			checked,
		});
	}, []);

	const onAdd = useCallback(
		(data): void => {
			const newId = nextId;

			dispatch({
				type: ADD,
				id: newId,
				data,
			});
			setNextId(nextId + 1);
		},
		[nextId],
	);

	const onAppend = useCallback(
		(data): void => {
			dispatch({
				type: APPEND,
				data,
			});
			setNextId(nextId + Number(_.size(data)));
		},
		[nextId],
	);

	const onUpdate = useCallback((e, data): void => {
		const { id } = e.target;
		dispatch({
			type: UPDATE,
			id,
			data,
		});
	}, []);

	const onDelete = useCallback((e, _id = null): void => {
		const pId = isNull(_id) ? e.target.id : _id;

		dispatch({
			type: DELETE,
			id: pId,
		});
	}, []);

	/**
	 * 비동기 콜백 실행
	 */
	const onCallback = useCallback(
		async (callback) => {
			dispatch({
				type: CALLBACK,
				callback,
			});
		},
		[state],
	);

	/**
	 * pagination functions
	 */
	const movePage = useCallback(
		(number): void => {
			dispatch({
				type: MOVE_PAGE,
				posCurrent: number,
			});
		},
		[state],
	);

	/**
	 * scroll Event Handler
	 * how to use : useEffect(() => scrollEventListener(document), []);
	 */
	const scrollEventListener = (
		selectors: any,
		pDownCallback = () => {
			console.log('on Refresh');
		},
		pUpCallback = () => {
			console.log('on load append');
		},
	) => {
		const el = selectors;

		const pStart = { x: 0, y: 0 };
		const pStop = { x: 0, y: 0 };
		let ticking = false;

		const firstLastCheck = () => {
			if (!ticking) {
				const scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
				const windowHeight = window.innerHeight; // 스크린 창
				const fullHeight = document.body.scrollHeight; //  margin 값은 포함 x

				window.requestAnimationFrame((t) => {
					if (scrollLocation <= 2) pDownCallback();
					if (scrollLocation + windowHeight >= fullHeight) pUpCallback();

					ticking = false;
				});
				return;
			}
			ticking = true;
		};

		const swipeStart = (e: any) => {
			if (typeof e.targetTouches !== 'undefined') {
				const touch = e.targetTouches[0];
				pStart.x = touch.screenX;
				pStart.y = touch.screenY;
			} else {
				pStart.x = e.screenX;
				pStart.y = e.screenY;
			}
		};

		const swipeEnd = (e: any) => {
			if (typeof e.changedTouches !== 'undefined') {
				const touch = e.changedTouches[0];
				pStop.x = touch.screenX;
				pStop.y = touch.screenY;
			} else {
				pStop.x = e.screenX;
				pStop.y = e.screenY;
			}

			swipeCheck();
		};

		const swipeCheck = () => {
			const changeY = pStart.y - pStop.y;
			const changeX = pStart.x - pStop.x;

			const uchangeY = pStop.y - pStart.y;
			const uchangeX = pStop.x - pStart.x;

			// console.log(changeX, changeY, isPullDown(changeY, changeX));

			if (isPullDown(changeY, changeX)) {
				console.log('Swipe Down!');
				firstLastCheck();
			}
			if (isPullDown(uchangeY, uchangeX)) {
				console.log('Swipe Up!');
				firstLastCheck();
			}
		};

		const isPullDown = (dY: any, dX: any) => {
			// methods of checking slope, length, direction of line created by swipe action
			return (
				dY < 0 &&
				((Math.abs(dX) <= 100 && Math.abs(dY) >= 300) || (Math.abs(dX) / Math.abs(dY) <= 0.3 && dY >= 60))
			);
		};

		/* 모바일 터치 감지 */
		el.addEventListener('touchstart', swipeStart);
		el.addEventListener('touchend', swipeEnd);
		/* 마우스 감지 */
		el.addEventListener('scroll', firstLastCheck);

		return () => {
			el.removeEventListener('touchstart', swipeStart);
			el.removeEventListener('touchend', swipeEnd);
			el.removeEventListener('scroll', firstLastCheck);
		};
	};

	const viewport = useCallback(() => {
		return {};
	}, [state]);

	return {
		state,
		viewport,
		getCheckItems,
		setSearch,
		onSearch,
		onSearchMission,
		onSort,
		onChoice,
		onResetChoice,
		onChecked,
		onCheckedAll,
		onCheckedListAll,
		onRefresh,
		onUpdate,
		onDelete,
		onAdd,
		onAppend,

		pages: state.pagination,
		movePage,
		onCallback,

		/**
		 * scroll Event Handler
		 * how to use : useEffect(() => scrollEventListener(document), []);
		 */
		scrollEventListener,
	};
}

export default useList;
