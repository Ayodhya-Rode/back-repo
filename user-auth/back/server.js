import dotenv from 'dotenv';
dotenv.config();

import app from "./src/app.js";
import connectDB from './src/DB/db.js';
connectDB()



app.listen(process.env.PORT, ()=>{
    console.log(`server listening on ${process.env.PORT}`);
    
})