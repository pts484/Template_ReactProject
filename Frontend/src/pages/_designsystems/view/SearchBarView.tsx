import Input from '@/components/input/input';
import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchBarContainer from '../components/SearchBar/SearchBarContainer';
import SearchDeleteIcon from '../components/SearchBar/SearchDeleteIcon';
import SearchGlassIcon from '../components/SearchBar/SearchGlassIcon';

const SearchBarView = (): JSX.Element => {
	return (
		<>
			<div className="container">
				<h1>Search Bar</h1>
				<br />
				<p className="subhead-long-03 gray-500">
					﹗ Search Bar는 div가 Container 된 상태로 제작 된 컴포넌트입니다.
					<br />
					﹗기본 운용 태그 :
					<code
						style={{ color: '#33bba0', fontWeight: 'bold' }}
					>{` <SearchBarContainer> <SearchBar/> <SearchBarContainer/> `}</code>
					<br />
					﹗focus 상태로 변경 방법 :
					<code style={{ color: '#33bba0', fontWeight: 'bold' }}>{` <SearchBarContainer>`}</code> 에 props로
					<code style={{ color: '#4ebbf1', fontWeight: 'bold' }}> focus</code>를 추가.
					<br />
					﹗placeholder, defaultValue :
					<code style={{ color: '#33bba0', fontWeight: 'bold' }}>{` <SearchBar/>`}</code> 에 props로
					<code style={{ color: '#4ebbf1', fontWeight: 'bold' }}> placeholder, defaultValue</code> 를 입력 후
					문자열 입력.
				</p>
				<br />
				<hr />
				<br />

				{/* single input - header */}
				<ul className="row mb-3">
					<li className="col-1"></li>
					<li className="col text-start">
						<span className="subhead-02">default</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">focus</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">filled(defaultValue)</span>
					</li>
					<li className="col text-start">
						<span className="subhead-02">{/* 여백의 미 */}</span>
					</li>
				</ul>

				{/* single input - default */}
				<ul className="row mb-3">
					<li className="col-1 d-flex justify-content-center align-items-center text-center">Search Bar</li>
					<li className="col">
						<SearchBarContainer>
							<SearchBar placeholder="검색어를 입력해주세요" />
						</SearchBarContainer>
						{/* <input className="cic-input-default" placeholder="cic-input-default" /> */}
					</li>
					<li className="col">
						<SearchBarContainer focus>
							<SearchBar placeholder="검색어를 입력해주세요" />
						</SearchBarContainer>
						{/* <input className="cic-input-default" placeholder="cic-input-default" /> */}
					</li>
					<li className="col">
						<SearchBarContainer>
							<SearchBar defaultValue="default Value" />
						</SearchBarContainer>
						{/* <input className="cic-input-default" placeholder="cic-input-default" /> */}
					</li>
					<li className="col">{/* 여백의 미 */}</li>
				</ul>
			</div>
		</>
	);
};

export default SearchBarView;
