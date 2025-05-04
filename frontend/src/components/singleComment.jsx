import React from 'react';
import { useDeleteCommentMutation } from '@/features/comments/commentApi';

const SingleComment = ({ comment }) => {
  const [deleteComment] = useDeleteCommentMutation();

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      try {
        await deleteComment(comment._id).unwrap();
      } catch (err) {
        console.error('Delete failed:', err);
      }
    }
  };

  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <img
          src={comment?.author?.avatar || '../assets/featured1.jpg'}
          className="w-10 h-10 object-cover rounded-full"
          alt={comment?.author?.name || 'User'}
        />
        <span className="font-medium">
          {comment?.author?.name || 'John Doe'}
        </span>
        <span className="text-sm text-gray-500">
          {new Date(comment?.createdAt).toLocaleDateString()}
        </span>
      </div>
      <div className="mt-4 flex justify-between items-start">
        <p className="text-gray-700">{comment?.text}</p>
        <button
          onClick={handleDelete}
          className="text-red-500 text-sm hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleComment;
