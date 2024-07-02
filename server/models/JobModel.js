// models/Job.js
import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  cnic: { type: Number, required: true },
  appliedPosition: { type: String, required: true },
  academicRecord: { type: String, required: true },
  experience: { type: String, required: true },
  relevantExperience: { type: String, required: true },
  profileImage: { type: String, required: true },
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
