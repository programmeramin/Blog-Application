import SideMenu from '@/components/sideMenu';
import PostList from '@/components/postList';
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router';

const AllPosts = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Sync with URL on first load
  useEffect(() => {
    const cat = searchParams.get('cat');
    const sort = searchParams.get('sort');
    setSelectedCategory(cat);
    setSelectedSort(sort);
  }, [searchParams]);

  // Handler to update both state + URL
  const handleFilterChange = ({ cat, sort }) => {
    const params = new URLSearchParams();

    if (cat) params.set('cat', cat);
    if (sort) params.set('sort', sort);

    navigate(`/blogs?${params.toString()}`);
    setSelectedCategory(cat);
    setSelectedSort(sort);
  };

  return (
    <div>
      <h1 className="my-8 text-2xl capitalize">
        {selectedCategory ? `${selectedCategory} Blogs` : 'All Blogs'}
      </h1>
      <button
        onClick={() => setOpen(prev => !prev)}
        className="bg-blue-800 text-white text-sm px-4 py-2 rounded-2xl mb-4 md:hidden"
      >
        {open ? 'Hide Filters' : 'Show Filters'}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div>
          <PostList category={selectedCategory} sort={selectedSort} />
        </div>
        <div className={`${open ? 'block' : 'hidden'} md:block`}>
          <SideMenu onFilterChange={handleFilterChange} />
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
