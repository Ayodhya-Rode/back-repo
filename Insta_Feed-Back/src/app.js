import express from "express";
import postModel from "./model/post.model.js";
import multer from "multer";
import uploadFile from "./services/storage.service.js";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  const buffer = req.file.buffer;

  const result = await uploadFile(buffer);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  return res.status(201).json({
    message: "Post created",
    post: post,
  });
});


app.get("/posts", async (req,res) =>{
  const posts = await postModel.find()

  return res.status(200).json({
    message:"posts feched...",
    posts: posts
  })
})


export default app;
