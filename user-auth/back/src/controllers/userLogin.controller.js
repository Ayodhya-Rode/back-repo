import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function UserLoginController(req, res) {
  try {
    const { username, password } = req.body; //body data

    if (!username || !password) {   // check username & password if empty
      return res.status(400).json({ message: "Username and password required" });
    }
    
    const findUser = await userModel.findOne({ username }); // check data via username

    if (!findUser) {  // if user is not present
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const ComparedPassword = await bcrypt.compare(password, findUser.password); //compare password

    if (!ComparedPassword) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign({ id: findUser._id }, process.env.JWT_SECRET_KEY);

    res.cookie("token", token).status(200).json({
      message: "You can login",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

export default UserLoginController;
