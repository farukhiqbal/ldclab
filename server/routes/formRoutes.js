import express from 'express';
import { createFormData } from '../controllers/formController.js';


const router = express.Router();

router.post('/', createFormData);

export default router;
