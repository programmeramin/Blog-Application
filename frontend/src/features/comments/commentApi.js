import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:5050/api';

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Comments'],
  endpoints: builder => ({
    addComment: builder.mutation({
      query: data => ({
        url: '/comments',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Comments'],
    }),
    getComments: builder.query({
      query: postId => `/comments/${postId}`,
      providesTags: ['Comments'],
    }),
    deleteComment: builder.mutation({
      query: commentId => ({
        url: `/comments/${commentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Comments'],
    }),
  }),
});

export const {
  useAddCommentMutation,
  useGetCommentsQuery,
  useDeleteCommentMutation,
} = commentApi;
