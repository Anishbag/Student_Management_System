import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    department:{
        type : String,
        required : true
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
