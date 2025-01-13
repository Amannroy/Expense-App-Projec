import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB } from './config/connectDB.js';
//import colors from 'colors';
import path from 'path';
import userRoutes from './routes/userRoute.js'; 
import transactionRoutes from './routes/transactionRoutes.js'; 


const app = express();

dotenv.config();

// Database Call
connectDB();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
// user routes
app.use('/api/v1/users', userRoutes);

// transaction routes
app.use('/api/v1/transactions', transactionRoutes);


//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
})