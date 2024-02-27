import React from 'react';
import { Input } from 'antd';

const SearchItem = (props) => {
	const { Search } = Input;

  return (
    <>
    	<Search
				placeholder="Название фильма..."
				onChange={props.onChange}
				allowClear
				value={props.search}
				onSearch={() => props.clickHandler(props.data.keyword)}>
			</Search>
    </>
  );
};

export default SearchItem;