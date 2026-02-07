import app from "./src/app.js";
import dotenv from "dotenv"
import connectDB from "./src/DB/db.js";


dotenv.config();
connectDB()


app.listen(process.env.PORT || 5000, () => {
    console.log("server is listening on", process.env.PORT);
    
})