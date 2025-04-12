import { Feedback } from '../models/feedbackModel.js';

// CREATE
export const createFeedback = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    const saved = await feedback.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// // READ ALL
// export const getAllFeedback = async (req, res) => {
//   try {
//     const feedbacks = await Feedback.find();
//     res.json(feedbacks);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // READ ONE
// export const getFeedbackById = async (req, res) => {
//   try {
//     const feedback = await Feedback.findById(req.params.id);
//     if (!feedback) return res.status(404).json({ error: 'Feedback not found' });
//     res.json(feedback);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // UPDATE
// export const updateFeedback = async (req, res) => {
//   try {
//     const updated = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!updated) return res.status(404).json({ error: 'Feedback not found' });
//     res.json(updated);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // DELETE
// export const deleteFeedback = async (req, res) => {
//   try {
//     const deleted = await Feedback.findByIdAndDelete(req.params.id);
//     if (!deleted) return res.status(404).json({ error: 'Feedback not found' });
//     res.json({ message: 'Feedback deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
