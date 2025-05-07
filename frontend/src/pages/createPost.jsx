// src/pages/CreatePost.jsx
import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import Input from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import 'react-quill-new/dist/quill.snow.css';
import { useCreatePostMutation } from '@/features/posts/postApi';
import { useSelector } from 'react-redux';

const CreatePost = () => {
  const [title, setTitle] = useState('Write your Awesome Story here...');
  const [category, setCategory] = useState('General');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('A Short Description');
  const user = useSelector(state => state.auth.user);

  const [createPost, { isLoading, isError }] = useCreatePostMutation();

  const handleSubmit = async e => {
    e.preventDefault();

    const postData = {
      title,
      category,
      description,
      content,
      author: user?._id,
    };

    try {
      const res = await createPost(postData).unwrap();
      console.log('✅ Post created:', res);

      // Optionally reset form or redirect:
      setTitle('');
      setCategory('General');
      setDescription('');
      setContent('');
      // navigate('/posts'); // if using react-router
    } catch (err) {
      console.error('❌ Failed to create post:', err);
    }
  };

  // ReactQuill toolbar
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'blockquote',
    'code-block',
    'link',
    'image',
  ];

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
            className="text-3xl font-bold border-none focus:ring-0 px-0 w-full"
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
            <option value="/posts">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="database">Database</option>
            <option value="seo">SEO</option>
            <option value="marketing">Marketing</option>
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
            formats={formats}
            className="bg-white rounded-md h-60"
            placeholder="Write your post content here..."
          />
        </div>
        {isError && (
          <div className="text-red-500 mt-2">
            ❌ Something went wrong while creating the post. Please try again.
          </div>
        )}
        <Button type="submit" className="sm:w-auto mt-10" disabled={isLoading}>
          {isLoading ? 'Publishing...' : 'Publish Post'}
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
