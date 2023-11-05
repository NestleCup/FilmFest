import React from 'react';
import { Pagination } from 'antd';
import style from './PaginationFilms.module.scss'

export const PaginationFilms = () => {
    const handlePageClick = (data) => {
        console.log(data);
    }
    return (
        <>
            <Pagination onChange={handlePageClick} defaultCurrent={6} total={500} />
        </>
    );
};
