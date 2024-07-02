import Job from '../models/JobModel.js';





// Create a new job application
export const createJob = async (req, res) => {
  const jobData = req.body;

  try {
    const newJob = new Job(jobData);
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all job applications
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get a job application by ID
export const getJobById = async (req, res) => {
  const { id } = req.params;

  try {
    const job = await Job.findById(id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json(job);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a job application
export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedJob = await Job.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedJob) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a job application
export const deleteJob = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedJob = await Job.findByIdAndDelete(id);
    if (!deletedJob) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
