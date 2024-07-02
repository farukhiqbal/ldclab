import express from 'express';
import { createJob, getJobs } from '../controllers/jobsController.js';
import upload from '../middlewares/blogMiddleware.js';

const router = express.Router();

router.post('/create-job', upload.single('profileImage'), createJob);          // Create a job application
router.get('/get-jobs', getJobs);                                            // Get all job applications
// router.get('/:id', getJobById);                                      // Get a job application by ID
// router.put('/:id', upload.single('profileImage'), updateJob);        // Update a job application
// router.delete('/:id', deleteJob);                                    // Delete a job application

export default router;
