import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetMeQuery } from '@/features/auth/authApi';
import { setCredentials } from '@/features/auth/authSlice';
import Container from '@/components/container';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Outlet } from 'react-router';

const Layout = () => {
  const dispatch = useDispatch();
  const { data, isSuccess } = useGetMeQuery();

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setCredentials({ user: data, accessToken: null }));
    }
  }, [isSuccess, data, dispatch]);

  return (
    <>
      <Header />
      <Container elem="main" className="pt-[70px] min-h-screen">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
