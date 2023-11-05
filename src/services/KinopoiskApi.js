import { apiBase, apiKey } from '../utils/const/api'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const KinopoiskApi = createApi({
    reducerPath: 'kinopoiskApi',

    baseQuery: fetchBaseQuery({
        baseUrl: apiBase,
        headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json',
        },
    }),
    endpoints: (builder) => ({
        getTopFilms: builder.query({
            query: () => `/top?type=TOP_100_POPULAR_FILMS&page=1`,
        }),
    }),
})

export const { useGetTopFilmsQuery } = KinopoiskApi