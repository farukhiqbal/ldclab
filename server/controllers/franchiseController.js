// controllers/franchiseController.js
import Franchise from '../models/franchiseModel.js';
import fs from 'fs'
import path from 'path';
//create franchise

export const createFranchise = async (req, res) => {
  try {
    const { name, email, address, phone, city, CNic, franchiseLocation, franchiseCity, franchiseArea, expectedRent } = req.body;
    const image = req.file ? req.file.path : null;

    // Validate that all required fields are filled
    if (!name || !email || !address || !phone || !city || !CNic || !franchiseLocation || !franchiseCity || !franchiseArea || !expectedRent || !image) {
      return res.status(400).json({ error: 'Please fill all the input fields.' });
    }

    // Check if the franchise with the same CNIC, phone, or email already exists
    const existingFranchise = await Franchise.findOne({
      $or: [
        { CNic },
        { phone },
        { email }
      ]
    });

    if (existingFranchise) {
      return res.status(400).json({ error: 'You are already registered.' });
    }

    const newFranchise = await Franchise.create({
      name, email, address, phone, city, CNic, franchiseLocation, franchiseCity, franchiseArea, expectedRent, image
    });

    res.status(201).json({ message: 'Your application has been submitted successfully.', newFranchise });
  } catch (error) {
    console.error('Error creating franchise:', error);
    res.status(500).json({ error: 'Error creating franchise' });
  }
};






// Get all franchises
export const getAllFranchises = async (req, res) => {
    try {
      const franchises = await Franchise.find();
      res.status(200).json(franchises);
    } catch (error) {
      console.error('Error fetching franchises:', error);
      res.status(500).json({ error: 'Error fetching franchises' });
    }
  }





// Update a franchise
export const updateFranchise = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, address, phone, city, CNic, franchiseLocation, franchiseCity, franchiseArea, expectedRent } = req.body;
    const newImage = req.file ? req.file.path : null;

    const franchise = await Franchise.findById(id);
    if (!franchise) {
      return res.status(404).json({ error: 'Franchise not found' });
    }

    // Check if franchise has an existing image and a new image is uploaded
    if (franchise.image && newImage) {
      // Construct the path to the existing image file
      const imagePath = path.join('uploads', '..', franchise.image);

      // Delete the existing image file
      fs.unlink(imagePath, (err) => {
        if (err) console.error('Error deleting existing image:', err);
      });
    }

    // Update franchise with new data
    franchise.name = name;
    franchise.email = email;
    franchise.address = address;
    franchise.phone = phone;
    franchise.city = city;
    franchise.CNic = CNic;
    franchise.franchiseLocation = franchiseLocation;
    franchise.franchiseCity = franchiseCity;
    franchise.franchiseArea = franchiseArea;
    franchise.expectedRent = expectedRent;
    franchise.image = newImage || franchise.image;

    await franchise.save();

    res.status(200).json(franchise);
  } catch (error) {
    console.error('Error updating franchise:', error);
    res.status(500).json({ error: 'Error updating franchise' });
  }
};











  export const deleteFranchise = async (req, res) => {
    try {
      const franchise = await Franchise.findById(req.params.id);
      if (!franchise) {
        return res.status(404).json({ error: 'franchise not found' });
      }
  
      if (franchise.image) {
        // Construct the path to the image file
        const imagePath = path.join('uploads', '..', franchise.image);
  
        // Delete image file
        fs.unlink(imagePath, (err) => {
          if (err) console.error('Error deleting image:', err);
        });
      }
  
      await Franchise.findByIdAndDelete(req.params.id);
      res.json({ message: 'franchise deleted successfully' });
    } catch (error) {
      console.error('Error  deleting franchise :', error);
      res.status(500).json({ error: 'Error deleting franchise' });
    }
  };
  