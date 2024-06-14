// import { useNavigate } from 'react-router-dom'
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
      query: (pages) =>
        `/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=${pages}`,
    }),

    getFilmsById: builder.query({
      query: (kinopoiskId) => `/api/v2.2/films/${kinopoiskId}`,
    }),
    getImagesById: builder.query({
      query: (kinopoiskId) =>
        `/api/v2.2/films/${kinopoiskId}/images?type=STILL&page=1`,
    }),

    getFilmsBySearch: builder.query({
      query: (keyword, pages) => ({
        url: `/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=1`,
        params: {
          q: keyword,
          per_page: 10,
        },
      }),
      transformErrorResponse: (response) => response.items,
    }),
    getTvShowsFilms: builder.query({
      query: (pages) =>
        `/api/v2.2/films/collections?type=TOP_250_TV_SHOWS&page=${pages}`,
    }),
    getComicsFilm: builder.query({
      query: (pages) =>
        `/api/v2.2/films/collections?type=KIDS_ANIMATION_THEME&page=${pages}`,
    }),
    getFilmsVideosById: builder.query({
      query: (kinopoiskId) => `/api/v2.2/films/${kinopoiskId}/videos`,
    }),
    getActorsById: builder.query({
      query: (kinopoiskId) => ({
        url: `/api/v1/staff?filmId=${kinopoiskId}`,
      }),
    }),
    getJenreFilmByNumber: builder.query({
      query: ({ category, pages = '' }) =>
        `/api/v2.2/films?genres=${category}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${pages}`,
    }),
    getReviewsById: builder.query({
      query: (kinopoiskId) =>
        `/api/v2.2/films/${kinopoiskId}/reviews?page=1&order=DATE_DESC`,
    }),
    getSimilarsById: builder.query({
      query: (kinopoiskId) => `/api/v2.2/films/${kinopoiskId}/similars`,
    }),
    getFamilyCollection: builder.query({
      query: (pages) => `/api/v2.2/films/collections?type=FAMILY&page=${pages}`,
    }),
    getRomanticFilms: builder.query({
      query: (pages) =>
        `/api/v2.2/films/collections?type=LOVE_THEME&page=${pages}`,
    }),
    getCatastropheFilms: builder.query({
      query: (pages) =>
        `/api/v2.2/films/collections?type=CATASTROPHE_THEME&page=${pages}`,
    }),
    getImagesByFilmsId: builder.query({
      query: (kinopoiskId) =>
        `/api/v2.2/films/${kinopoiskId}/images?type=STILL&page=1`,
    }),
    getExternalSourcesByFilmsId: builder.query({
      query: (kinopoiskId) =>
        `/api/v2.2/films/${kinopoiskId}/external_sources?page=1`,
    }),
  }),
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
  useGetActorsByIdQuery,
  useGetReviewsByIdQuery,
  useGetJenreFilmByNumberQuery,
  useGetSimilarsByIdQuery,
  useGetFamilyCollectionQuery,
  useGetRomanticFilmsQuery,
  useGetCatastropheFilmsQuery,
  useGetImagesByFilmsIdQuery,
  useGetExternalSourcesByFilmsIdQuery,
} = KinopoiskApi

// const navigate = useNavigate()

// KinopoiskApi.injectEndpoints({
//   endpoints: (build) => ({
//     onQueryError: async ({ error }) => {
//       if (error.status === 404) {
//         navigate.push('/404')
//       }
//     },
//   }),
// })
