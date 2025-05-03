import Comments from '@/components/comments';
import PostMenuActions from '@/components/postMenuActions';
import { Link } from 'react-router';
import React from 'react';

const SinglePost = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a
            necessitatibus
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            reprehenderit ut eius rem fuga modi possimus, commodi, laborum
            quidem officia sed nesciunt voluptatibus sequi dolores?
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <img
            src="../assets/featured1.jpg"
            className="rounded-2xl"
            alt="Feature 1"
          />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          laboriosam minima officiis error magnam veniam sunt, neque, obcaecati
          nostrum adipisci officia ab tempore architecto iste, fugiat quas ipsam
          beatae! Laboriosam nihil expedita minima repudiandae temporibus quia,
          repellat quasi sequi esse, odit eos commodi quod nobis optio! Culpa
          reiciendis sequi tempore!
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <img
                src="../assets/featured1.jpg"
                className="rounded-2xl"
                alt="Feature 1"
              />
              <Link className="text-blue-800">John doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="flex gap-2">
              <Link>
                FB img
              </Link>
              <Link>
                IG img
              </Link>
            </div>
          </div>
          <PostMenuActions />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePost;
