import React, { useState } from 'react';
import SingleComment from './singleComment';
import {
  useAddCommentMutation,
  useGetCommentsQuery,
} from '@/redux/api/commentApi';

const Comments = ({ postId }) => {
  const [text, setText] = useState('');
  const { data, isLoading, isError } = useGetCommentsQuery(postId);
  const [addComment, { isLoading: isSending }] = useAddCommentMutation();

  const handleSend = async () => {
    if (!text.trim()) return;

    try {
      await addComment({ postId, text }).unwrap();
      setText('');
    } catch (err) {
      console.error('Failed to send comment:', err);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>

      {/* Add Comment */}
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl border border-gray-200"
        />
        <button
          onClick={handleSend}
          disabled={isSending}
          className="bg-blue-800 text-white font-medium rounded-xl px-4 py-3 hover:bg-blue-700 transition-all"
        >
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </div>

      {/* List Comments */}
      {isLoading ? (
        <p>Loading comments...</p>
      ) : isError ? (
        <p>Failed to load comments.</p>
      ) : data?.length === 0 ? (
        <p className="text-gray-500">No comments yet. Be the first one!</p>
      ) : (
        data.map(comment => (
          <SingleComment key={comment._id} comment={comment} />
        ))
      )}
    </div>
  );
};

export default Comments;
