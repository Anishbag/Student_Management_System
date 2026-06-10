import express from "express";

import protect from "../middleware/authMiddleware.js";

import { createEmployee,getEmployees,getEmployeeById,updateEmployee,deleteEmployee } from "../controllers/employeeController.js";


const router = express.Router();
router.post("/",protect,createEmployee);
router.get("/",protect,getEmployees);
router.get("/:id",protect,getEmployeeById);
router.put("/:id",protect,updateEmployee);
router.put("/:id",protect,deleteEmployee);


export default router;