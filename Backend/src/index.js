import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../utils/db.js";
import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"
dotenv.config({});
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));
const PORT = process.env.PORT || 3000;

app.use("/api/v1/users",userRoutes)
app.use("/api/v1/auth",authRoutes)

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});