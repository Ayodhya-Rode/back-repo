import express from "express";
import creatMusic from "../controllers/music.controllers.js";
import multer from "multer";

const upload =  multer({
    storage:multer.memoryStorage()
})

const router = express.Router();

router.post("/upload",upload.single("music") , creatMusic)

export default router;