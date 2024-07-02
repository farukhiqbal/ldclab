// models/Franchise.js
import mongoose from 'mongoose';

const FranchiseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true }, 
  phone: { type: Number, required: true },
  city: { type: String, required: true },
  CNic: { type: Number, required: true },
  franchiseLocation: { type: String, required: true },
  franchiseCity: { type: String, required: true },
  franchiseArea: { type: String, required: true },
  expectedRent: { type: Number, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Franchise', FranchiseSchema);
