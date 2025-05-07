import FeaturePosts from '@/components/featurePosts';
import MainCategories from '@/components/mainCatagories';
import PostList from '@/components/postList';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router';

const Home = () => {
  const location = useLocation();

  const selectedCategory = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('cat');
  }, [location.search]);

  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/*INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-grey-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Unveiling Creative Realms, Ideas, and Tech Discoveries
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Indulge in Every Word, Crafted with Joy
          </p>
        </div>
      </div>
      {/* FEATURED POSTS */}
      <FeaturePosts />

      <MainCategories />
      {/* POST LIST */}
      <div>
        <h1 className="my-8 text-2xl text-gray-600 capitalize">
          {selectedCategory ? `${selectedCategory} Posts` : 'All Posts'}
        </h1>
        <PostList category={selectedCategory} />
      </div>
    </div>
  );
};

export default Home;
