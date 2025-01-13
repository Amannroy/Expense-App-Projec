import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';

export const connectDB = async() => {
    try{
         await mongoose.connect(process.env.MONGO_URL)
         console.log(`Server running on ${mongoose.connection.host}`.bgCyan.white);
         
    }catch(error){
        console.log(`${error}`.bgRed);
        
    }
}