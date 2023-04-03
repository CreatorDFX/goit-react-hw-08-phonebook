import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes: ['Contact'],
    keepUnusedDataFor: 0,
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => 'contacts',
            providesTags: ['Contact'],
        }),
        addContact: builder.mutation({
            query: contact => ({
                url: '/contacts',
                method: 'POST',
                body: contact,
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
        updateContact: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `/contacts/${id}`,
                method: 'PATCH',
                body: patch,
            }),
            invalidatesTags: ['Contact'],
        }),

    }),
})

export const {
    useFetchContactsQuery,
    useLazyFetchContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation,
    useUpdateContactMutation,
} = contactsApi;