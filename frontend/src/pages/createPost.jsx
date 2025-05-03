// src/pages/CreatePost.jsx
import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import Input from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import 'react-quill-new/dist/quill.snow.css';

const CreatePost = () => {
  const [title, setTitle] = useState('My Awesome Story');
  const [category, setCategory] = useState('General');
  const [content, setContent] = useState('- asdfads');
  const [description, setDescription] = useState('A Short Description');

  const handleSubmit = e => {
    e.preventDefault();
    const postData = {
      title,
      category,
      description,
      content,
    };
    console.log('Post data to submit:', postData);
    // Later: dispatch(createPost(postData)) using RTK Query or thunk
  };

  // ReactQuill toolbar options
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'bullet' }],
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Create a New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Cover Image */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Add a cover image</label>
          <div className="flex items-center justify-center w-full h-40 border-2 border-dashed rounded-lg bg-gray-50">
            <span className="text-gray-500">
              Click to upload or drag and drop
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <Input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="text-3xl font-bold border-none focus:ring-0 px-0"
          />
        </div>

        {/* Category Selector */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Choose a category:
          </label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="block w-40 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="General">General</option>
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>

        {/* Short Description */}
        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Enter a short description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        {/* Content Editor */}
        <div className="space-y-2 ">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            className="bg-white rounded-md h-60"
            placeholder="Write your post content here..."
          />
        </div>

        <Button type="submit" className="sm:w-auto mt-10">
          Publish Post
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
