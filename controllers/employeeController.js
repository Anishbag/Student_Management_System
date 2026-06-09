import Employee from "../models/Employee.js";

export const createEmployee = async (req,res) =>{
    try{
        const employee = await Employee.create(req.body);

        res.status(201).json(employee);

    }
    catch(error){
        res.status(500).json({
            message : error.message,
        });
    }
};

export const getEmployees = async(req,res) =>{
    try{
        const employees = await Employee.find();

        res.status(200).json(employees);
    }
    catch(error){
        res.status(500).json({
            message : error.message,
        })
    }
};

export const getEmployeeById = async (req,res) => {
    try{
        const employee = await Employee.findById(req.params.id);

        if (!employee){
            return res.status(404).json({
                message : "Employee not found"
            });
        }
        res.status(200).json(employee);
    }
    catch (error) {
        res.status(500).json({
            message : error.message
        });
    }
};