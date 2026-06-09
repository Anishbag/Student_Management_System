import jwt from "jsonwebtoken";

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn :"30d"}); //30 din por expire hobe JWT
};

export default generateToken;