import User from "../models/User.js";
import bcrypt from "bcryptjs";



// =============================
// Create Employee
// =============================
export const createEmployee = async (req, res) => {
  try {

    const {
      name,
      email,
      password,
      department
    } = req.body;

    const exist = await User.findOne({
      email
    });

    if (exist) {
      return res.status(400).json({
        message: "Employee already exists"
      });
    }

    const salt = await bcrypt.genSalt(10);

    const hashPassword =
      await bcrypt.hash(password, salt);

    const employee =
      await User.create({
        name,
        email,
        password: hashPassword,
        role: "employee",
        department
      });

    res.status(201).json({
      message: "Employee created successfully",
      employee
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};



// =============================
// Get All Employees
// Search
// Department Filter
// =============================

export const getEmployees = async (
  req,
  res
) => {

  try {

    const {
      search,
      department
    } = req.query;

    const query = {
      role: "employee"
    };

    if (search) {

      query.name = {
        $regex: search,
        $options: "i"
      };

    }

    if (department) {

      query.department =
        department;

    }

    const employees =
      await User.find(query)
      .select("-password");

    res.status(200).json(
      employees
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message
    });

  }

};


// =============================
// Get Employee By ID
// =============================
export const getEmployeeById = async (req, res) => {
  try {

    const employee = await User.findById(req.params.id)
      .select("-password");

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    res.status(200).json(employee);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};



// =============================
// Update Employee
// =============================
export const updateEmployee = async (req, res) => {
  try {

    const employee = await User.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    employee.name =
      req.body.name || employee.name;

    employee.email =
      req.body.email || employee.email;

    employee.department =
      req.body.department || employee.department;

    await employee.save();

    res.status(200).json({
      message: "Employee updated successfully",
      employee
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};



// =============================
// Delete Employee
// =============================
export const deleteEmployee = async (req, res) => {
  try {

    const employee = await User.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Employee deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};