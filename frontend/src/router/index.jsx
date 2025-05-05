import Layout from '@/layouts';
import AuthLayout from '@/layouts/auth-layout';
import ProtectedLayout from '@/layouts/protected-layout';
import About from '@/pages/about';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import Blogs from '@/pages/blogs';
import Contact from '@/pages/contact';
import Home from '@/pages/home';
import AdminRoute from '@/components/adminRoute';
import PrivateRoute from '@/components/privateRoute';
import Profile from '@/pages/protected/profile';
import VerifyEmailNotice from '@/pages/verifyEmailNotice';
import Dashboard from '@/pages/protected/dashboard';
import ManageUsers from '@/pages/protected/admin/manage-users';
import ManagePosts from '@/pages/protected/admin/manage-posts';
import { createBrowserRouter } from 'react-router';
import CreatePost from '@/pages/createPost';
import SinglePost from '@/pages/singlePost';
import VerifyEmail from '@/components/verifyEmail';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/verify-email-notice',
        element: <VerifyEmailNotice />,
      },
      {
        path: '/verify-email',
        element: <VerifyEmail />,
      },
      {
        path: '/create-post',
        element: <CreatePost />,
      },
      {
        path: '/test',
        element: <SinglePost />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: '/auth/login',
            element: <Login />,
          },
          {
            path: '/auth/register',
            element: <Register />,
          },
        ],
      },
      {
        element: (
          <PrivateRoute>
            <ProtectedLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: '/profile',
            element: <Profile />,
          },
          {
            path: '/dashboard',
            element: <Dashboard />,
          },

          {
            // Admin-only routes nested inside protected routes
            element: <AdminRoute />,
            children: [
              {
                path: '/admin/manage-users',
                element: <ManageUsers />,
              },
              {
                path: '/admin/manage-posts',
                element: <ManagePosts />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
