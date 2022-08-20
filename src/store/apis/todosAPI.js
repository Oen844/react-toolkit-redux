import { createApi, fetchBaseApi } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseApi({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),

    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos',
        })
    })
})

export const { useGetTodosQuery } = todosApi;