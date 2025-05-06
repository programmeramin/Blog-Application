import React from 'react';
import { useParams, Link } from 'react-router'; //
import {
  useLikePostMutation,
  useDislikePostMutation,
  useGetPostByIdQuery,
} from '@/features/posts/postApi';
import Comments from '@/components/comments';
import PostMenuActions from '@/components/postMenuActions';
import { useSelector } from 'react-redux';

const SinglePost = () => {
  const { postId } = useParams(); // dynamic route like /posts/:postId
  const { data: post, isLoading, isError } = useGetPostByIdQuery(postId);
  const [likePost] = useLikePostMutation();
  const [dislikePost] = useDislikePostMutation();

  const user = useSelector(state => state.auth.user);

  const canManagePost =
    user && (user._id === post?.author?._id || user.role === 'admin');

  if (isLoading) return <p>Loading...</p>;
  if (isError || !post) return <p>Post not found.</p>;

  const handleLike = () => {
    likePost(postId);
  };

  const handleDislike = () => {
    dislikePost(postId);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Post detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {post?.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">{post?.author?.name}</Link>
            <span>on</span>
            <Link className="text-blue-800">{post?.category}</Link>
            <span>{new Date(post?.createdAt).toDateString()}</span>
          </div>
          <p className="text-gray-500 font-medium">{post?.description}</p>
        </div>
        <div className="hidden lg:block w-2/5">
          <img
            src={post?.image || '/default-placeholder.png'}
            alt={post?.title || 'Blog post image'}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Post content + sidebar */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        <div
          className="lg:text-lg flex flex-col gap-6 text-justify"
          dangerouslySetInnerHTML={{ __html: post?.content }}
        />

        {/* Side menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <img
                src={post?.author?.avatar || '/default-avatar.png'}
                alt={post?.author?.name || 'Author'}
                className="rounded-2xl w-16 h-16 object-cover"
              />
              <Link className="text-blue-800">{post?.author?.name}</Link>
            </div>
            <p className="text-sm text-gray-500">
              {post?.author?.bio || 'No bio available'}
            </p>
            <div className="flex gap-2">
              <Link>FB</Link>
              <Link>IG</Link>
            </div>
          </div>

          {/* Like/Dislike Buttons */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={handleLike}
              className="px-4 py-2 bg-green-600 text-white rounded-xl"
            >
              👍 {post?.likes?.length || 0}
            </button>
            <button
              onClick={handleDislike}
              className="px-4 py-2 bg-red-600 text-white rounded-xl"
            >
              👎 {post?.dislikes?.length || 0}
            </button>
          </div>
          {/* For Delete and Edit post */}
          {canManagePost && <PostMenuActions postId={postId} />}
        </div>
      </div>

      {/* Comments */}
      <Comments postId={postId} />
    </div>
  );
};

export default SinglePost;
