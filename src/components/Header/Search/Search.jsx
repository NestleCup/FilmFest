import React, { useState } from 'react';
import { Input } from 'antd';



const Search = () => {
const [searchText, setSearchText] = useState("")
    return (
        <div>
            <Input.Search placeholder="Поиск . . ." style={{  maxWidth: 300 }} onSearch={(value) => {
                setSearchText(value)
            }}
            ></Input.Search>
        </div>
    );
}

export default Search;