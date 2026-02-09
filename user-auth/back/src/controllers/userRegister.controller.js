import userModel from "../model/user.model.js"
import bcrypt from "bcrypt";

async function UserRegisterController(req, res) {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUser = await userModel.create({
    username,
    email,
    password: hashedPassword,
  });

  res.status(200).json({
    message: "user created",
    createdUser,
  });
}

export default UserRegisterController;