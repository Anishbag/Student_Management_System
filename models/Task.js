import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title : String,
    description : String,

    assignedTo:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Employee"
    },

    assignedBy:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },

    dueDate : Date,

    status : {
        type : String,
        enum : ["pending..","In-Process","Completed"],

        default : "pending"
    }
},
{timestamps : true}
);

export default mongoose.model(
    "Task",taskSchema
);