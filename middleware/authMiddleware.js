import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req,res,next ) => {
    let token;

    if(
        req.headers.authorization && req.headers.authorization.startsWith("Bearer")
    ){
        token =req.headers.authorization.split(" ")[1];

        try {

             const decoded = jwt.verify(token, process.env.JWT_SECRET);

             console.log("Decoded Token:", decoded);

             req.user = await User.findById(decoded.id).select("-password");

             console.log("User From DB:", req.user);

             next();
    } 
    catch (error) {
      res.status(401).json({
        message: "Not Authorized"
      });
    }
  }

  if (!token) {
    res.status(401).json({
      message: "No Token"
    });
  }
};

export default protect;
  