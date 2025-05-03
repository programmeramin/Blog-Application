import React from 'react';

const SingleComment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <img
          src="../assets/featured1.jpg"
          className="rounded-2xl"
          alt="Feature 1"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-smtext-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ea
          odio, eaque ipsa dolor repudiandae eum. Asperiores, soluta!
          Praesentium nisi aliquam dignissimos itaque eaque cum maxime optio
          repellat suscipit eveniet?
        </p>
      </div>
    </div>
  );
};

export default SingleComment;
