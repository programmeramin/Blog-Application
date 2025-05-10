import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { useParams, Link } from 'react-router'; //
import {
  useLikePostMutation,
  useDislikePostMutation,
  useGetPostByIdQuery,
} from '@/features/posts/postApi';
import Comments from '@/components/comments';
import PostMenuActions from '@/components/postMenuActions';
import { useSelector } from 'react-redux';
import { placeholderUserImage } from '@/constants';

const SinglePost = () => {
  const { postId } = useParams();
  console.log(postId); // dynamic route like /posts/:postId
  const { data: post, isLoading, isError } = useGetPostByIdQuery(postId);
  const [likePost] = useLikePostMutation();
  const [dislikePost] = useDislikePostMutation();

  const user = useSelector(state => state.auth.user);
  console.log(post);

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
            <Link className="text-blue-800">{post?.author?.username}</Link>
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
          className="lg:text-lg flex flex-col text-justify"
          dangerouslySetInnerHTML={{ __html: post?.content }}
        />

        {/* Side menu */}
        <div className="px-4 h-max sticky top-25">
          <h1 className="mb-4 text-sm font-medium">{post?.author?.username}</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <img
                src={post?.author?.image || placeholderUserImage}
                alt={post?.author?.username || 'Author'}
                className="rounded-2xl w-16 h-16 object-cover"
              />
              <Link className="text-blue-800">{post?.author?.username}</Link>
            </div>
            <div className="flex gap-2">
              <Link>FB</Link>
              <Link>IG</Link>
            </div>
          </div>
          {/* For Delete and Edit post */}
          {canManagePost && <PostMenuActions postId={postId} />}
        </div>
      </div>
      {/* Like/Dislike Buttons */}
      <div className="flex justify- gap-6 mt-10">
        <button
          onClick={handleLike}
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-tr from-green-500 to-emerald-600 text-white font-medium rounded-xl shadow hover:scale-105 hover:shadow-lg transition-all border border-green-600"
        >
          <ThumbsUp className="w-5 h-5" />
          <span>{post?.likes?.length || 0}</span>
        </button>

        <button
          onClick={handleDislike}
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-tr from-red-500 to-rose-600 text-white font-medium rounded-xl shadow hover:scale-105 hover:shadow-lg transition-all border border-red-600"
        >
          <ThumbsDown className="w-5 h-5" />
          <span>{post?.dislikes?.length || 0}</span>
        </button>
      </div>
      {/* Comments */}
      <Comments postId={postId} />
    </div>
  );
};

export default SinglePost;
