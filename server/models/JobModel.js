// models/Job.js
import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: false },
  phone: { type: Number, required: true },
  email: { type: String, required: false },
  city: { type: String, required: false },
  cnic: { type: Number, required: false },
  appliedPosition: { type: String, required: false },
  academicRecord: { type: String, required: false },
  experience: { type: String, required: false },
  relevantExperience: { type: String, required: false },
  profileImage: { type: String, required: false },
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
