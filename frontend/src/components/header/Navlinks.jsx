import React from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

export const NavLinks = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const routes = [
    {
      label: 'Home',
      href: '/',
      active: pathname === '/',
    },
    {
      label: 'About',
      href: '/about',
      active: pathname === '/about',
    },
  ];

  return (
    <div className="gap-5 hidden lg:flex">
      {routes.map(route => (
        <Link
          to={route.href}
          key={route.label}
          className={cn(
            'capitalize',
            pathname === route.href && 'font-semibold'
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};
