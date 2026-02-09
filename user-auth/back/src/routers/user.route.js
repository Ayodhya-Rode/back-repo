import express from "express";
import UserRegisterController from "../controllers/userRegister.controller.js";
import UserLoginController from "../controllers/userLogin.controller.js";

const router = express.Router();


router.post("/register",UserRegisterController)

router.post("/login", UserLoginController)

export default router;