import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"

export async function registerUser(req,res){

    const { username, email,password} = req.body;

    const userAlreadyExist = await userModel.findOne({email})

    if(userAlreadyExist){
        res.status(409).json({
            message:"User is Exist"
        })
    }

    const user = await userModel.create({
        username,email,password
    })

    const token =  jwt.sign({id: user._id},process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message: 'user registed successfully',
        user,
    })
}

