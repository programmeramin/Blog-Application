import Layout from "@/layouts";
import AuthLayout from "@/layouts/auth-layout";
import ProtectedLayout from "@/layouts/protected-layout";
import About from "@/pages/about";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Blogs from "@/pages/blogs";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import Profile from "@/pages/protected/profile";
import VerifyEmailNotice from "@/pages/verifyEmailNotice";
import { createBrowserRouter } from "react-router";

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
        element: <ProtectedLayout />,
        children: [
          {
            path: '/profile',
            element: <Profile />,
          },
        ],
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
    ],
  },
]);
