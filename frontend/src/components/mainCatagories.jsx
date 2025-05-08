import React from 'react';
import { Link, useLocation } from 'react-router';

const MainCategories = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const currentCat = params.get('cat') || '';

  const categories = [
    { label: 'All Posts', value: '', className: 'bg-blue-800 text-white' },
    { label: 'Web Design', value: 'web-design' },
    { label: 'Development', value: 'development' },
    { label: 'Database', value: 'database' },
    { label: 'Search Engines', value: 'seo' },
    { label: 'Marketing', value: 'marketing' },
  ];

  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      <div className="flex-1 flex items-center justify-between flex-wrap">
        {categories.map(cat => {
          const isActive = currentCat === cat.value;
          return (
            <Link
              key={cat.label}
              to={cat.value ? `/?cat=${cat.value}` : '/'}
              className={`rounded-full px-4 py-2 transition-all duration-200 ${
                isActive
                  ? 'bg-blue-800 text-white'
                  : 'hover:bg-blue-100 text-gray-700'
              }`}
            >
              {cat.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MainCategories;
