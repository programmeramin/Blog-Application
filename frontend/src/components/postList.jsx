import React from 'react';
import PostListItem from './postListItem';
import { useGetAllPostsQuery } from '@/features/posts/postApi';

const PostList = () => {
  const { data: posts, isLoading, error } = useGetAllPostsQuery();

  if (isLoading) return <p className="text-center">Loading posts...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load posts</p>;

  return (
    <div className="flex flex-col gap-12 mb-8">
      {posts?.length ? (
        posts.map(post => <PostListItem key={post._id} post={post} />)
      ) : (
        <p className="text-center">No posts available</p>
      )}
    </div>
  );
};

export default PostList;
