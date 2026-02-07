import mongoose from "mongoose";


async function ConnectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected");
        
    } catch (error) {
        console.log("Error to connectDB", error);
        
    }
};

export default ConnectDB;