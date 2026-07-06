import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    role:{
        type:String,
        enum:["admin","employee"],
        default:"employee"
    },

    department:{
        type:String,
        required: true
    },

    joiningDate:{
        type:Date,
        default:Date.now
    },

    profileImage:{
        type:String,
        default:""
    }
},
{timestamps:true}
);

export default mongoose.model("User",userSchema);