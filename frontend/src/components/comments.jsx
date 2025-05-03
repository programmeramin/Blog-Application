import React from 'react';
import SingleComment from './singleComment';

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          placeholder="Write a comment..."
          className="w-full p-4 rounded-x1"
        />
        <button className="bg-blue-800 px-4 py-3text-white font-medium rounded-xl">
          Send
        </button>
      </div>
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </div>
  );
};

export default Comments;
