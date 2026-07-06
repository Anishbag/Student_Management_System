import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";


export const registerUser = async (req, res) =>{
    const{
        name,
        email,
        password,
        role
    } = req.body;

    const exist = await User.findOne({email});

    if (exist){
        return res.status(400).json({
            message : "User already exist"
        })
    }

    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password,salt);


    const user = await User.create ({
        name,
        email,
        password : hashPassword,
        role
    });

    res.status(201).json({
        message : "User registered successfully",
        _id : user._id,
        name : user.name,
        email : user.email,
        // role : user.role,
        token : generateToken(user)

    });

};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    console.log("Email:", email);
    console.log("Password:", password);

    const user = await User.findOne({ email });

    console.log("User:", user);

    if (user) {
        const match = await bcrypt.compare(password, user.password);
        console.log("Password Match:", match);

        if (match) {
            return res.json({
                message: "Login Successfully Done",
                _id: user._id,
                name: user.name,
                token: generateToken(user)
            });
        }
    }

    return res.status(401).json({
        message: "Invalid email or password"
    });
};


export const getProfile = async (req,res) =>{
    try{
        const user = await User.findById(req.user._id).select("-password");

        if (!user) {
            return res.status(404).json({
                message : "User not found"
            });
        }
        res.status(200).json(user);
    } 
    catch (error){
        res.status(500).json({
            message : error.message
        });
    }

};

