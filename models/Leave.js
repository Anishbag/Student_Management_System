import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema({
    employeeId:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"Employee"
    },

    fromDate : Date,
    toDate : Date,
    reason : String,
    enum:[
        "pending","Approved","Rejected"
    ],
    default : "pending" 
},
{timestamps : true}
);

export default mongoose.model("Leave",leaveSchema);