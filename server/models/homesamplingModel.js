import mongoose from 'mongoose';

const homeSamplingSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  Email: { type: String,  },
  city: { type: String, required: true },
  Number: { type: String, required: true, match: /^\d{11}$/ },
  address: { type: String, required: true },
  testName: { type: String },
  prescription: { type: String },
  date: { type: Date, required: true },
  time: { type: String, required: true }
});

const HomeSampling = mongoose.model('HomeSampling', homeSamplingSchema);

export default HomeSampling;
