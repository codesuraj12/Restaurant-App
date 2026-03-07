export const adminOnly =(req,res,next)=>{

if(req.user && req.user.role === "admin"){  // ye req.user authmiddleware ka he vha user he vo check hoga es logic se
    next();
}
else{
     res.status(403).json({ message: "Admin access only" });
}

}