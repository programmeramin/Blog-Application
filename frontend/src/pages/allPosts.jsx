import SideMenu from '@/components/sideMenu';
import PostList from '@/components/postList';
import { useState } from 'react';

const PostListPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        onClick={() => setOpen(prev => !prev)}
        className="bg-blue-800 text-white text-sm px-4 py-2 rounded-2xl mb-4 md:hidden"
      >
        {open ? 'Hide Filters' : 'Show Filters'}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div>
          <PostList category={selectedCategory} />
        </div>
        <div className={`${open ? 'block' : 'hidden'} md:block`}>
          <SideMenu setCategory={setSelectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
