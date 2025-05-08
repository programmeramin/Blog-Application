import Post from '../models/postModels.js';
import errorHandler from '../middleware/errorHandler.js';
import mongoose from 'mongoose';

// Create a new blog post
export const createBlog = async (req, res, next) => {
  try {
    const { title, content, category, description, image } = req.body;
    const userId = req.user.id;
    const slug = title
      .split(' ')
      .join('-')
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, '');

    const blog = new Post({
      author: userId,
      title,
      content,
      image,
      slug,
      category,
      description,
    });
    await blog.save();

    res.status(201).json(blog);
  } catch (err) {
    next(err);
  }
};

// Get all blog posts
export const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Post.find().populate('author');
    console.log(blogs);

    res.json(blogs);
  } catch (err) {
    next(err);
  }
};

// Get single blog post by ID
export const getBlogById = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid blog ID' });
  }

  try {
    const blog = await Post.findById(id).populate('author');
    console.log(blog);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    next(err);
  }
};

// Update blog post
export const updateBlog = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const updatedData = { title, content };

    if (req.file) {
      updatedData.image = req.file.path;
    }

    const blog = await Post.findByIdAndUpdate(req.params.userId, updatedData, {
      new: true,
    });
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    res.json(blog);
  } catch (err) {
    next(err);
  }
};

// Delete blog post
export const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Post.findByIdAndDelete(req.params.userId);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    next(err);
  }
};
