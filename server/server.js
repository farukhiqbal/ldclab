import  express from "express";
import  colors  from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from 'cors';
import  authRoute  from './routes/authRoute.js';
import formRoutes from './routes/formRoutes.js'
import franchiseRoutes from './routes/franchiseRoutes.js'
import homesampling from './routes/homesamplingRoutes.js'
import JobsForm from './routes/jobsRoutes.js'
// import path  from "path";
const app = express();

//configure env
dotenv.config();

//database config
connectDB();




//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// app._router(express.static(path.join(__dirname,'./client/build')))

//routes
// Serve uploaded images statically
app.use('/uploads', express.static('uploads'));


// Serve PDF files staticallyapp.use(express.static(path.join(__dirname, 'ldc-project', 'build')));


app.use("/api/v1/auth", authRoute);
app.use('/api/sampleBooking', formRoutes);
app.use('/api', franchiseRoutes);
app.use('/api',homesampling)
app.use('/api',JobsForm)


//rest api
// app.use('*',function(req,res){
//   req.sendFile(path.join(__dirname,'./client/build/index.html'));
// });




//port
const PORT = process.env.PORT ;


//run listen

app.listen(PORT, () =>{
    console.log(`server is runing on ${PORT}`.bgCyan.white)
})
