import { BASE_URL } from '@/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// Replace with your backend API URL

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
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
        credentials: 'include',
      }),
    }),
    verifyEmail: builder.query({
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
  useLazyVerifyEmailQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetMeQuery,
} = authApi;
