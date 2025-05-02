import React from 'react';
import { Link } from 'react-router';

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <img
          src="../assets/featured1.jpg"
          className="rounded-2xl object-cover"
          alt="Feature 1"
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam modi
          eum aut.
        </Link>
        <div className="flex items-center gap-2text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          reprehenderit hic consequatur ad rem, accusamus doloribus aspernatur
          quisquam sequi at. dolorem facilis ut quam minus ex illo accusantium
          laudantium dolorum,
        </p>
        <Link to="/test" className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
