import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()




async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected");
    }catch(err){
        console.log("Error to connect DB");   
    }   
}


export default connectDB