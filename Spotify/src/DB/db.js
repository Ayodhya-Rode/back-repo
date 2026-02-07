import mongoose from "mongoose";

async function ConnectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("db CONNECTED...");
        
    } catch (error) {
        console.log("DB not conected..");
        
    }
}

export default ConnectDB