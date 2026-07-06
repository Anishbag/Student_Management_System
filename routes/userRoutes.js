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



export default router;