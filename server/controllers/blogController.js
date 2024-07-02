// controllers/blogController.js

import Blog from '../models/blogModel.js'
import fs from 'fs'
import path from 'path';
import { join } from 'path';
import upload from '../middlewares/blogMiddleware.js';

export const createBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? req.file.path : null;

    const newBlog = await Blog.create({ title, description, image });
    res.status(201).json(newBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'Error creating blog' });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Error fetching blogs' });
  }
};




///get blog by by


export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ error: 'Error fetching blog' });
  }
};


 //update the blog 

export const updateBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newImage = req.file ? req.file.path : null;

    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    // Check if blog has an existing image
    if (blog.image) {
      // Construct the path to the existing image file
      const imagePath = path.join('uploads','..', blog.image);

      // Delete the existing image file
      fs.unlink(imagePath, (err) => {
        if (err) console.error('Error deleting existing image:', err);
      });
    }

    // Update blog with new data
    blog.title = title;
    blog.description = description;
    blog.image = newImage || blog.image;

    await blog.save();

    res.json(blog);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ error: 'Error updating blog' });
  }
};




export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    if (blog.image) {
      // Construct the path to the image file
      const imagePath = path.join('uploads', '..', blog.image);

      // Delete image file
      fs.unlink(imagePath, (err) => {
        if (err) console.error('Error deleting image:', err);
      });
    }

    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ error: 'Error deleting blog' });
  }
};
