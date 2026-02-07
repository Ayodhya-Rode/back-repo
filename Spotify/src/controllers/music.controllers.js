import musicModel from "../models/music.model.js";
import jwt from "jsonwebtoken";
import uploadFile from "../services/storage.services.js";

async function creatMusic(req, res) {
  const { title } = req.body;
  const file = req.file;
  const token = req.cookies.token;

  const result = await uploadFile(file.toString("base64"));

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (decoded.role !== "artist") {
      return res.status(403).json({
        message: "You don't have access to ceate music!",
      });
    }

    const music = await musicModel.create({
      uri: result.uri,
      title,
      artist: decoded.id,
    });

    res.status(201).json({
      message: "music created successfully",
      music: {
        id: music._id,
        uri: music.uri,
        title: music.title,
        artist: music.artist,
      },
    });
  } catch (error) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }
}

export default creatMusic;
