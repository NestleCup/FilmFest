import { Pagination, ConfigProvider } from 'antd';

const PaginationFilms = ({ setPages }) => {

	const onShowSizeChange = (page) => {
		setPages(page)
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