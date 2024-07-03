import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from 'cors';
// import authRoute from './routes/authRoute.js';
// import formRoutes from './routes/formRoutes.js';
// import franchiseRoutes from './routes/franchiseRoutes.js';
// import homesamplingRoutes from './routes/homesamplingRoutes.js'; // Corrected import
import jobsRoutes from './routes/jobsRoutes.js'; // Corrected import

const app = express();

// Configure env
dotenv.config();

// Database config
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow only ldclab.vercel.app
  credentials: true, // Include credentials
}));

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// Serve uploaded images statically
app.use('/uploads', express.static('uploads'));

// Routes
// app.use("/api/v1/auth", authRoute);
// app.use('/api/sampleBooking', formRoutes);
// app.use('/api', franchiseRoutes);
// app.use('/', homesamplingRoutes); // Corrected usage
app.use('/', jobsRoutes); // Corrected usage





// / Alternatively, set headers manually
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});



app.get("/", (req, res) => {
  res.send("Server is running");
});

// Port
const PORT = process.env.PORT || 5000; // Added default port

// Run server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.cyan.bgWhite);
});
