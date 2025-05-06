import React from 'react';
import Container from '../container';
import Logo from '../logo';
import NavLinks from './nav-links';
import SearchInput from './search-input';
import { ThemeToggler } from './theme-toggler';
import { buttonVariants } from '../ui/button';
import { Edit } from 'lucide-react';
import MobileSidebar from './mobile-sidebar';
import { Link, useLocation } from 'react-router';
import { cn } from '@/lib/utils';
import { UserButton } from '../user-button';
import { useSelector } from 'react-redux';

const Header = () => {
  const { user } = useSelector(state => state.auth);
  const { pathname } = useLocation();
  const isAuthPage = pathname.includes('auth');
  return (
    <header className="fixed h-[70px] inset-x-0 border-b bg-background">
      <Container className="flex h-full items-center justify-between gap-14">
        <div className="flex items-center gap-4">
          <MobileSidebar />
          <Logo />
        </div>
        <div className="flex gap-4 w-full justify-end items-center">
          {!isAuthPage && <SearchInput />}
          <NavLinks />
          {user ? (
            <Link to="/create-post" className={buttonVariants()}>
              Write <Edit className="size-4" />{' '}
            </Link>
          ) : (
            <Link to="/auth/login" className={cn(buttonVariants())}>
              Login
            </Link>
          )}
          <ThemeToggler className="hidden sm:flex" />
          {user && <UserButton />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
