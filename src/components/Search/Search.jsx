import React, { useState, useEffect } from 'react'
import { Input, ConfigProvider } from 'antd'
import {
  useGetFilmsBySearchQuery,
  useLazyGetFilmsBySearchQuery,
} from '../../services/KinopoiskApi'
import { useDebounce } from '../../hooks/useDebounce'
import SearchResult from './component/SearchResult/SearchResult'

const Search = () => {
  const [search, setSearch] = useState('')
  const debounced = useDebounce(search)

  const { data, isError, isLoading } = useGetFilmsBySearchQuery(debounced, {
    skip: debounced.lenght < 3,
  })

  const [fetchRepos] = useLazyGetFilmsBySearchQuery()
  const clickHandler = (keyword) => {
    fetchRepos(keyword)
  }
  useEffect(() => {}, [debounced])

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: 'white',
          colorPrimary: '#C21111',
        },
        components: {
          Input: {
            activeBorderColor: 'red',
          },
        },
      }}
    >
      {isError && <Input status="error" placeholder="Error" />}
      {data && (
        <Input.Search
          placeholder="Название фильма..."
          onChange={onChange}
          allowClear
          value={search}
          enterButton
          onSearch={() => clickHandler(data.keyword)}
        ></Input.Search>
      )}

      <div className="search-flex search-padding">
        <SearchResult data={data} isLoading={isLoading} search={search} />
      </div>
    </ConfigProvider>
  )
}
export default Search
