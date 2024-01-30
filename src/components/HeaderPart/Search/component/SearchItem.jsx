import React from 'react';
import { Input } from 'antd';
import { useParams } from 'react-router-dom';

const SearchItem = (props) => {
	const { Search } = Input;
	const params = useParams()
  
  return (
    <>
    	<Search
				placeholder="What are you looking?"
				onChange={props.onChange}
				allowClear
				value={props.search}
				onSearch={() => props.clickHandler(props.data.keyword)}>
			</Search>
    </>
  );
};

export default SearchItem;