import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { contactsApi } from 'redux/contacts/api'
import { baseURL } from 'redux/constants'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes: ['auth', 'Contact'],
    endpoints: (builder) => ({
        fetchCurrentUser: builder.query({
            query: () => 'users/current',
            providesTags: ['auth'],
        }),
        signup: builder.mutation({
            query: user => ({
                url: '/users/signup',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['auth'],
        }),
        login: builder.mutation({
            query: user => ({
                url: '/users/login',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['auth'],
        }),
        logout: builder.mutation({
            query: () => {
                // contactsApi.util.resetApiState();
                // () => { contactsApi.resetApiState() };
                // authApi.injectEndpoints({
                //     endpoints: () => ({}),
                // });
                return {
                    url: '/users/logout',
                    method: 'POST',
                }
            },
            invalidatesTags: ['auth'],

        }),

    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useFetchCurrentUserQuery,
    useSignupMutation,
    useLoginMutation,
    useLogoutMutation,
} = authApi;