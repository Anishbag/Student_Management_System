import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import protect from "../middleware/authMiddleware.js";
import { uploadProfileImage } from "../controllers/userController.js";

const router = express.Router();

router.post("/upload-profile",
  protect,
  upload.single("profileImage"),
  uploadProfileImage
);

router.get("/test", (req, res) => {
  res.send("Route Working anish");
});

export default router;