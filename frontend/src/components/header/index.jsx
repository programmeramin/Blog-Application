import React from 'react';
import { cn } from '@/lib/utils';
import { Edit, X } from 'lucide-react';
import { Link, useLocation } from 'react-router'; // Using react-router-dom instead
import { ThemeToggler } from '../theme-toggler';
import { buttonVariants } from '../ui/button';
import { UserButton } from '../user-button';

import { Logo } from './logo';
import MobileSidebar from '../mobile-sidebar';
import { DesktopSearchInput } from './desktop-searach-input';
import { MobileSearchInput } from './mobile-search-input';
import { NavLinks } from './Navlinks';

export const Header = ({ currentUser }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="fixed inset-x-0 border-b h-[65px] bg-background z-50">
      <Container className="h-full flex items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <MobileSidebar currentUser={currentUser} />
          <Logo />
        </div>
        <DesktopSearchInput />
        <div className="flex items-center justify-end gap-5">
          <ThemeToggler className="hidden lg:block" />
          <NavLinks />
          <MobileSearchInput />
          {currentUser ? (
            <>
              {(pathname.includes('new') || pathname.includes('edit')) &&
              pathname !== '/blogs/editor-choice' ? (
                <Link
                  to="/"
                  className={cn(
                    buttonVariants({
                      variant: 'destructive',
                    })
                  )}
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Link>
              ) : (
                <Link to="/blogs/new" className={cn(buttonVariants())}>
                  <Edit className="h-4 w-4 mr-2" />
                  Write
                </Link>
              )}
              <UserButton currentUser={currentUser} />
            </>
          ) : (
            <Link to="/sign-in" className={cn(buttonVariants())}>
              Login
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
};
