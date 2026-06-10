import jwt from "jsonwebtoken";

const generateToken = (user) =>{
    return jwt.sign({id : user._id, role : user.role},
        process.env.JWT_SECRET,{expiresIn :"30d"}); //30 din por expire hobe JWT
};

export default generateToken;