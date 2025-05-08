// src/pages/CreatePost.jsx
import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import Input from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import 'react-quill-new/dist/quill.snow.css';
import { useCreatePostMutation } from '@/features/posts/postApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { uploadToCloudinary } from '@/lib/uploadToCloudinary';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('General');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [description, setDescription] = useState('');
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();

  const [createPost, { isLoading, isError }] = useCreatePostMutation();

  const handleSubmit = async e => {
    e.preventDefault();

    const postData = {
      title,
      category,
      description,
      content,
      author: user?._id,
      image: coverImage,
    };

    try {
      const res = await createPost(postData).unwrap();
      console.log('✅ Post created:', res);

      // Optionally reset form or redirect:
      setTitle('');
      setCategory('General');
      setDescription('');
      setContent('');
      setCoverImage(null);
      navigate('/'); // if using react-router
    } catch (err) {
      console.error('❌ Failed to create post:', err);
    }
  };

  const handleImageChange = async e => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const url = await uploadToCloudinary(file);
    setCoverImage(url);
    setUploading(false);
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

          {/* Hidden file input */}
          <input
            type="file"
            id="cover-upload"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          {/* Custom button */}
          <label
            htmlFor="cover-upload"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition"
          >
            {coverImage ? 'Change Image' : 'Upload Cover Image'}
          </label>

          {uploading && <p className="text-sm text-blue-500">Uploading...</p>}

          {coverImage && (
            <img
              src={coverImage}
              alt="Cover"
              className="mt-2 w-full h-78 object-cover rounded-md shadow"
            />
          )}
        </div>

        {/* Title */}
        <div className="space-y-2">
          <Input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter post title"
            className="text-3xl font-bold border-2  focus:ring-0 p-2 w-full"
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
