import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema({

    employeeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Employee",
        required:true
    },

    fromDate:{
        type:Date,
        required:true
    },

    toDate:{
        type:Date,
        required:true
    },

    reason:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum:["pending","approved","rejected"],
        default:"pending"
    }

},{timestamps:true});

export default mongoose.model("Leave",leaveSchema);