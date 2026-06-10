import express from "express"
import cors from "cors"
import authRoutes from "./routes/authRoutes.js";
import userRouters from "./routes/userRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads")); //uploads folder public 

app.use("/api/auth", authRoutes);
app.use("/api/users",userRouters);

export default app;