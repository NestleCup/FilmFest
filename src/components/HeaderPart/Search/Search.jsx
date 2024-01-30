import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { useGetFilmsBySearchQuery, useLazyGetFilmsBySearchQuery } from '../../../services/KinopoiskApi';
import SearchItem from './component/SearchItem';
import { useDebounce } from '../../../hooks/useDebounce';


const Search = () => {
	const [search, setSearch] = useState('')
	const debounced = useDebounce(search)

	const { data, isFetching, isError, isLoading } = useGetFilmsBySearchQuery(debounced, {
		skip: debounced.lenght < 3
	})
	const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetFilmsBySearchQuery()
	const clickHandler = (keyword) => {
		fetchRepos(keyword);
	}
	useEffect(() => {
	}, [debounced])

	const onChange = (e) => {
		setSearch(e.target.value)
	}
	return (
		<>
			{isError && <p>Something went wrong</p>}
			<SearchItem data={data}
				onChange={onChange}
				clickHandler={clickHandler}
			/>
			{/* {data.films.map((films) => (<h1>{films.nameRu}</h1>))} */}
		</>
	);
}
export default Search
