// src/pages/CreatePost.jsx

import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import Input from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import 'react-quill-new/dist/quill.snow.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const postData = {
      title,
      category,
      content,
    };

    console.log('Post data to submit:', postData);

    // Later: dispatch(createPost(postData)) using RTK Query or thunk
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Create New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <Input
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <Input
            type="text"
            placeholder="e.g. Tech, Travel, Lifestyle"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="bg-white h-90"
          />
        </div>

        <Button type="submit" className="mt-10">
          Publish Post
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
