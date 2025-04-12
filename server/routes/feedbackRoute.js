import express from 'express';
import {
  createFeedback
} from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/add-feedback', createFeedback);
// router.get('/', getAllFeedback);
// router.get('/:id', getFeedbackById);
// router.put('/:id', updateFeedback);
// router.delete('/:id', deleteFeedback);

export default router;
