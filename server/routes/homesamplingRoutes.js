import express from 'express';
import { uploadMiddleware } from '../middlewares/samplingmiddleware.js';
import { createHomeSampling, getAllHomeSampling } from '../controllers/homesamplingController.js';

const router = express.Router();

router.post('/home-sampling', uploadMiddleware, createHomeSampling);


//get all samples 
router.get('/get-sample',getAllHomeSampling)


export default router;
