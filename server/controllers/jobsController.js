// controllers/jobController.js
import Job from '../models/JobModel.js';


export const createJob = async (req, res) => {
  try {
    // Check if the name and phone fields are present
    const { name, phone } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required fields.' });
    }

    const {
      address, email, city, cnic, appliedPosition, academicRecord, experience, relevantExperience
    } = req.body;
    const profileImage = req.file ? req.file.path : null;

    const newJob = await Job.create({
      name, address, phone, email, city, cnic, appliedPosition, academicRecord, experience, relevantExperience, profileImage
    });

    res.status(201).json({ message: 'Your application has been submitted successfully.', newJob });
  } catch (error) {
    console.error('Error creating job application:', error);
    res.status(500).json({ error: 'Error creating job application' });
  }
};


// export const createJob = async (req, res) => {
//   try {
//     const {
//       name, address, phone, email, city, cnic, appliedPosition, academicRecord, experience, relevantExperience
//     } = req.body;
//     const profileImage = req.file ? req.file.path : null;

//     const newJob = await Job.create({
//       name, address, phone, email, city, cnic, appliedPosition, academicRecord, experience, relevantExperience, profileImage
//     });

//     res.status(201).json({ message: 'Your application has been submitted successfully.', newJob });
//   } catch (error) {
//     console.error('Error creating job application:', error);
//     res.status(500).json({ error: 'Error creating job application' });
//   }
// };





// Get all job applications
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Error fetching jobs' });
  }
};












