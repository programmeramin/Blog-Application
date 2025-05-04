import React from 'react';

const SideMenu = () => {
  const categories = ['All', 'Web Design', 'React', 'Node.js', 'MongoDB'];
  
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label
          htmlFor=""
          className="flex items-center gap-2 cursor-pointer rounded-sm checked:bg-blue-800"
        >
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-blue-800 cursor-pointer"
          />
          Newest
        </label>
        <label
          htmlFor=""
          className="flex items-center gap-2 cursor-pointer rounded-sm checked:bg-blue-800"
        >
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-blue-800 cursor-pointer"
          />
          Most Popular
        </label>
        <label
          htmlFor=""
          className="flex items-center gap-2 cursor-pointer rounded-sm checked:bg-blue-800"
        >
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-blue-800 cursor-pointer"
          />
          Trending
        </label>
        <label
          htmlFor=""
          className="flex items-center gap-2 cursor-pointer rounded-sm checked:bg-blue-800"
        >
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] bg-white border-blue-800 cursor-pointer"
          />
          Most Viewed
        </label>
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to="/posts">
          All
        </Link>
        <Link className="underline" to="/posts?cat=web-design">
          Web Design
        </Link>
        <Link className="underline" to="/posts?cat=development">
          Development
        </Link>
        <Link className="underline" to="/posts?cat=databases">
          Databases
        </Link>
        <Link className="underline" to="/posts?cat=seo">
          Search Engines
        </Link>
        <Link className="underline" to="/posts?cat=marketing">
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
