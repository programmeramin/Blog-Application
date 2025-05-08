import React from 'react';

const SideMenu = ({ onFilterChange }) => {
  const handleCategoryClick = cat => {
    onFilterChange({ cat, sort: null });
  };

  const handleSortChange = e => {
    const sort = e.target.value;
    onFilterChange({ cat: null, sort });
  };

  return (
    <div className="px-4 h-max sticky top-25">
      <h1 className="mt-8 mb-4 text-sm font-medium">Sort By</h1>
      <div className="flex flex-col gap-2 text-sm">
        {['newest', 'popular', 'trending', 'viewed'].map(sort => (
          <label key={sort} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              value={sort}
              onChange={handleSortChange}
            />
            {sort[0].toUpperCase() + sort.slice(1)}
          </label>
        ))}
      </div>

      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        {[
          'all',
          'web-design',
          'development',
          'databases',
          'seo',
          'marketing',
        ].map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat === 'all' ? null : cat)}
            className="underline text-left"
          >
            {cat === 'all' ? 'All' : cat.replace('-', ' ').toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
