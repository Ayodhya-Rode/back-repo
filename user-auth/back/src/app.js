import express from "express";
import router from "./routers/user.route.js";
import cors from "cors"

const app = express();
app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true,               // important for cookies
}));

app.use("/api/auth", router)



export default app;