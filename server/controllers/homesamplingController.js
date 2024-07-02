import HomeSampling from '../models/homesamplingModel.js';


export const createHomeSampling = async (req, res) => {
  const { firstName, Email, city, Number, address, testName, date, time } = req.body;
  const prescription = req.file ? req.file.path : '';

  const sample = new HomeSampling({
    firstName,
    Email,
    city,
    Number,
    address,
    testName,
    prescription,
    date,
    time
  });

  try {
    const savedSample = await sample.save();
    res.status(201).json(savedSample);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};





// Controller function to get all home sampling data
export  const getAllHomeSampling = async (req, res) => {
    try {
      // Fetch all home sampling data from the database
      const homeSamplingData = await HomeSampling.find();
      // Send the fetched data as a response
      res.status(200).json(homeSamplingData);
    } catch (error) {
      // Handle errors
      res.status(500).json({ message: error.message });
    }
  };


