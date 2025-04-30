import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Replace with your backend API URL
const BASE_URL = 'http://localhost:5050/api'; 

export const authApi = createApi({
  reducerPath: 'authApi',
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
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/auth/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: userData => ({
        url: '/auth/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    verifyEmail: builder.mutation({
      query: verificationToken => ({
        url: `/auth/verify-email/${verificationToken}`,
        method: 'GET',
      }),
    }),
    forgotPassword: builder.mutation({
      query: email => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: { email },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, newPassword }) => ({
        url: `/auth/reset-password/${token}`,
        method: 'POST',
        body: { newPassword },
      }),
    }),
    getMe: builder.query({
      query: () => '/auth/me',
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetMeQuery,
} = authApi;
