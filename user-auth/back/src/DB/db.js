import mongoose from "mongoose";

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB connected successfullly...");
        
    } catch (error) {
        console.log("error to connect DB");
        
    }
}

export default connectDB;