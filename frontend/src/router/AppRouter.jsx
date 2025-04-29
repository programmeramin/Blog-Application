// src/router/AppRouter.jsx
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from '@/layouts/MainLayout';
import Login from '@/pages/Login';


import Home from '@/pages/Home';
import Register from '@/pages/Register';

// Dashboard pages

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
  // {
  //   path: '/dashboard',
  //   element: <DashboardLayout />,
  //   children: [
  //     { index: true, element: <DashboardHome /> },
  //   ],
  // },
  // { path: '*', element: <NotFound /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
