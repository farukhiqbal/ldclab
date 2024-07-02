// routes/blogRoutes.js

import express from 'express';
import upload from '../middlewares/blogMiddleware.js';
import {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js';

const router = express.Router();

// Create a new blog
router.post('/blogs', upload.single('image'), createBlog);

// Get all blogs
router.get('/blogs', getBlogs);

// Get a blog by ID
router.get('/blogs/:id', getBlogById);

// Update a blog by ID
router.put('/blogs/:id', upload.single('image'), updateBlog);

// Delete a blog by ID
router.delete('/blogs/:id', deleteBlog);

export default router;
