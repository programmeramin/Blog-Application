import Container from '@/components/container';
import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@/features/auth/authSlice';

const Layout = () => {
  const user = useSelector(selectCurrentUser);
  console.log(user);
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
