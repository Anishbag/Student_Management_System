import express from "express";

import protect from "../middleware/authMiddleware.js";

import adminOnly from "../middleware/adminMiddleware.js"

import {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
} from "../controllers/employeeController.js";


const router = express.Router();

router.post("/",protect,adminOnly,createEmployee);

router.get("/",protect,adminOnly,getEmployees);

router.get("/:id",protect,adminOnly,getEmployeeById);

router.put("/:id",protect,adminOnly,updateEmployee);

router.delete("/:id",protect,adminOnly,deleteEmployee);


export default router;