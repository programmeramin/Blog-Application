import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { authApi } from '../features/auth/authApi';
import { postApi } from '@/features/posts/postApi';

const apiMiddlewares = [authApi.middleware, postApi.middleware];


export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(...apiMiddlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
