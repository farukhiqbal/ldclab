import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  cellNo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  satisfaction: {
    type: String,
    enum: ['Very satisfied', 'Satisfied', 'Not satisfied'],
    required: true
  }
});

export const Feedback = mongoose.model('Feedback', feedbackSchema);