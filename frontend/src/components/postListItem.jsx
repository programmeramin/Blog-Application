import React from 'react';
import { Link } from 'react-router';

const PostListItem = ({ post }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* Image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <img
          src={post.image || '/default-placeholder.png'} // ✅ dynamic image or fallback
          className="rounded-2xl object-cover w-full h-60"
          alt={post.title}
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link
          to={`/posts/${post._id}`}
          className="text-4xl font-semibold hover:underline"
        >
          {post.title}
        </Link>

        <div className="flex flex-wrap items-center gap-2 text-gray-500 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800 hover:underline">
            {post.author?.name || 'Unknown Author'}
          </Link>
          <span>on</span>
          <Link className="text-blue-800 hover:underline">
            {post.category || 'Uncategorized'}
          </Link>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>

        <p className="text-gray-700 text-base">
          {post.summary || post.description?.slice(0, 150) + '...'}
        </p>

        <Link
          to={`/posts/${post._id}`}
          className="underline text-blue-800 text-sm hover:text-blue-600"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
