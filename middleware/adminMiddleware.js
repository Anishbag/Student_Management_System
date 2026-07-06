const adminOnly = (req,res,next)=>{


    console.log("Role:", req.user.role);
    console.log("User:", req.user)

    if(req.user.role !== "admin"){
        return res.status(403).json({
            message:"Access Denied"
        });
    }

    next();
};

export default adminOnly;