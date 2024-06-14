import { Pagination, ConfigProvider } from 'antd'

const PaginationFilms = ({ setPages, pages, data }) => {
  const onShowSizeChange = (page) => {
    setPages(page)
  }

  const totalPages = data?.totalPages * 10 || null
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Pagination: {
              colorTextDisabled: 'red',
              colorText: 'white',
              colorPrimaryHover: 'red',
              colorPrimary: 'red',
            },
          },
        }}
      >
        <div className="pagination">
          <Pagination
            onChange={onShowSizeChange}
            current={pages}
            total={totalPages}
          />
        </div>
      </ConfigProvider>
    </>
  )
}

export default PaginationFilms
