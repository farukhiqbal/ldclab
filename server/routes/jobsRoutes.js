import express from 'express';
import { createJob, getJobs } from '../controllers/jobsController.js';
import upload from '../middlewares/blogMiddleware.js';

const router = express.Router();

router.post('/create-jobs', upload.single('profileImage'), createJob);          // Create a job application
router.get('/get-jobs', getJobs);                                            // Get all job applications
                                   

export default router;
