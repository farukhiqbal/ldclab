// routes/franchiseRoutes.js
import express from 'express';
import { createFranchise, deleteFranchise, getAllFranchises, updateFranchise } from '../controllers/franchiseController.js';
import upload from '../middlewares/blogMiddleware.js'
const router = express.Router();

router.post('/franchise', upload.single('image'), createFranchise);

router.get('/franchises', getAllFranchises);
router.put('/franchise/:id', upload.single('image'), updateFranchise);
router.delete('/franchise/:id', deleteFranchise);






export default router;
