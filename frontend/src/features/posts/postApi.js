import { createApi } from '@reduxjs/toolkit/query/react';
import { mockPosts } from './mockPosts'; // 👈 import your mock data

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: async () => ({ data: {} }), // we ignore real baseQuery for now
  tagTypes: ['Posts'],
  endpoints: builder => ({
    getAllPosts: builder.query({
      queryFn: async () => {
        return { data: mockPosts }; // send mock data
      },
      providesTags: ['Posts'],
    }),
    getPostById: builder.query({
      queryFn: async id => {
        const post = mockPosts.find(p => p.id === id);
        return post
          ? { data: post }
          : { error: { status: 404, message: 'Post not found' } };
      },
      providesTags: (result, error, id) => [{ type: 'Posts', id }],
    }),
    createPost: builder.mutation({
      queryFn: async postData => {
        // Optional: push to mockPosts array in-memory if needed
        return { data: { message: 'Mock post created', post: postData } };
      },
      invalidatesTags: ['Posts'],
    }),
    updatePost: builder.mutation({
      queryFn: async ({ id, data }) => {
        return { data: { message: `Mock post ${id} updated`, post: data } };
      },
      invalidatesTags: ['Posts'],
    }),
    deletePost: builder.mutation({
      queryFn: async id => {
        return { data: { message: `Mock post ${id} deleted` } };
      },
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
