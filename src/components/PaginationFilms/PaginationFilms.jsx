import React, { useRef, useState } from 'react';
import { Pagination, ConfigProvider } from 'antd';
import style from './PaginationFilms.module.scss'
import { setPageCount } from '../../store/feature/pagination/paginationSlise'
import { useSelector, useDispatch } from 'react-redux'

const ITEMS_PER_PAGE = 50

const PaginationFilms = (props) => {

	const dispatch = useDispatch()
	const page = useRef(1)
	const [totalPages, setTotalPages] = useState(1)
	const pageCount = 15
	// const pagination = useSelector((state) => state.pagination.value)
	const pageChangeHandler = (e) => {
		console.log(e);
	}
	const onShowSizeChange = number => {
		dispatch(setPageCount(number))
		props.setTotalPages(props.totalPages + 1) && props.setTotalPages(props.totalPages - 1)
	  };

	return (
		<>
			<ConfigProvider
				theme={{
					components: {
						Pagination: {
							colorTextDisabled: 'red',
							colorText: 'white',
							colorPrimaryHover: 'red',
							colorPrimary: 'red'
						},
					},
				}}
			>
				<Pagination
					showSizeChanger
					onChange={onShowSizeChange}
					defaultCurrent={1}
					total={100}
				/>
			</ConfigProvider>

		</>
	);
};

export default PaginationFilms