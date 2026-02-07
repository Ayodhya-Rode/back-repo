import express from "express";
import { registerUser } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/register", registerUser)

router.get("/test",(req,res)=>{
    console.log("cookie",req.cookies);
    
    res.status(200).json({
        message: "cookies get",
        // cookies:req.cookies
    })
})

export default router;