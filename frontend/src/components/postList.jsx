import React from 'react';
import PostListItem from './postListItem';
import { useGetAllPostsQuery } from '@/features/posts/postApi';

const PostList = ({ category, sort }) => {
  const {
    data: posts,
    isLoading,
    error,
  } = useGetAllPostsQuery({ cat: category, sort });

  if (isLoading) return <p className="text-center">Loading posts...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load posts</p>;

  const filteredPosts = category
    ? posts.filter(post => post.category === category)
    : posts;

  return (
    <div className="flex flex-col gap-12 mb-8">
      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => <PostListItem key={post._id} post={post} />)
      ) : (
        <p className="text-center">No posts available in this category</p>
      )}
    </div>
  );
};

export default PostList;
