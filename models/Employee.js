import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name:{
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true,
        unique : true
    },
    department:{
        type : String,
        require : true
    },
    role:{
        type : String,
        default : "Employee"
    },
    joiningDate:{
        type : Date,
        default : Date.now
    },
},
{timestamps : true}
);

const Employee = mongoose.model(
    "Employee",employeeSchema

);
export default Employee;
