import React from 'react';
import { Link } from 'react-router';
import OptimizedImage from './OptimizedImage';

const PostListItem = ({ post }) => {
  if (!post) return null;

  // Ensure we have a valid image URL or use placeholder
  const imageUrl = post.image || '/default-placeholder.png';

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex flex-col xl:flex-row">
        {/* Cover Image */}
        <div className="xl:w-1/3">
          <div className="relative h-60 overflow-hidden">
            <OptimizedImage
              src={imageUrl}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt={post.title || 'Blog Post Cover'}
              placeholder="empty" // Using empty placeholder for better performance with Cloudinary images
            />
            {post.category && (
              <div className="absolute top-4 left-4">
                <Link
                  to={`/?cat=${post.category}`}
                  className="bg-blue-800/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-900 transition-colors"
                >
                  {post.category}
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Post Details */}
        <div className="flex flex-col gap-4 p-6 xl:w-2/3">
          <Link
            to={`/posts/${post._id}`}
            className="text-2xl md:text-3xl font-semibold hover:text-blue-800 transition-colors text-gray-900 line-clamp-2"
          >
            {post.title || 'Untitled Post'}
          </Link>

          <div className="flex flex-wrap items-center gap-2 text-gray-500 text-sm">
            <span>By</span>
            <Link
              to={`/authors/${post.author?._id || ''}`}
              className="text-blue-800 hover:underline font-medium"
            >
              {post.author?.username || 'Unknown'}
            </Link>
            <span>•</span>
            <span>{new Date(post.createdAt).toLocaleDateString('en-US', {
              year: 'numeric', 
              month: 'short', 
              day: 'numeric'
            })}</span>
          </div>

          <p className="text-gray-600 text-base line-clamp-3">
            {post.summary ||
              post.description?.slice(0, 150) + '...' ||
              'No summary available.'}
          </p>

          <div className="mt-auto pt-2">
            <Link
              to={`/posts/${post._id}`}
              className="inline-flex items-center text-blue-800 font-medium hover:text-blue-900 transition-colors"
            >
              Read Article
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
