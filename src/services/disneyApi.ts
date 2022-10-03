import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {characters} from './../types'

export const disneyApi = createApi({
    reducerPath: 'disneyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.disneyapi.dev/characters/' }),
    endpoints: (builder) => ({
      getDisneyById: builder.query<characters,string>({
        query: (id:string) => `/${id}`,
      }),
    }),
  })

  export const { useGetDisneyByIdQuery } = disneyApi