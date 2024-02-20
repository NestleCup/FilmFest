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
			query: (pages = '') => `/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=${pages}`,
		}),

		getFilmsById: builder.query({
			query: (kinopoiskId) => `/api/v2.2/films/${kinopoiskId}`
		}),
		getImagesById: builder.query({
			query: (kinopoiskId) => `/api/v2.2/films/${kinopoiskId}/images?type=STILL&page=1`
		}),

		getFilmsBySearch: builder.query({
			query: (keyword) => ({
				url: `/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=2`,
				params: {
					q: keyword,
					per_page: 10
				}
			}),
			transformErrorResponse: (response) => response.items
		}),
		getTvShowsFilms: builder.query({
			query: () => `/api/v2.2/films/collections?type=TOP_250_TV_SHOWS&page=1`,
		}),
		getComicsFilm: builder.query({
			query: () => `/api/v2.2/films/collections?type=KIDS_ANIMATION_THEME&page=1`,
		}),
		getFilmsVideosById:builder.query({
			query: (kinopoiskId) => `/api/v2.2/films/${kinopoiskId}/videos`,
		}),
		getActorsById:builder.query({
			query: (kinopoiskId) => ({
				url: `/api/v1/staff?filmId=${kinopoiskId}`
			}),
		}),
		getJenreFilmByFilters:builder.query({
			query: (kinopoiskId) => `/api/v2.2/films/${kinopoiskId}/videos`,
		}),
	})
})

export const {
	useGetTopFilmsQuery,
	useGetFilmsByIdQuery,
	useGetFilmsBySearchQuery,
	useGetComicsFilmQuery,
	useGetTvShowsFilmsQuery,
	useLazyGetFilmsBySearchQuery,
	useGetImagesByIdQuery,
	useGetFilmsVideosByIdQuery,
	useGetActorsByIdQuery
} = KinopoiskApi