import React, { useState } from 'react';
import { Input } from 'antd';



export const Search = () => {
const [searchText, setSearchText] = useState("")
    return (
        <>
            <Input.Search placeholder="Поиск . . ." style={{  maxWidth: 300 }} onSearch={(value) => {
                setSearchText(value)
            }}
            ></Input.Search>
        </>
    );
}
