import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            require : true
        },
        email:{
            type : String,
            require : true,
            unique : true

        },
        password:{
            type: String,
            require : true
        },
        role:{
            type : String,
            enum : ["employee","admin"],
            default : "employee"
        },
        
        profileImage: {
                type: String,
                default: ""
        }
    },
    {timestamps : true}
);
export default mongoose.model("User",userSchema);