// models/Blog.js

import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Assuming we'll store the path of the image in the database
    required: true,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
