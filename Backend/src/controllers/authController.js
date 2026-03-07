import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// User Registration ka logic

export const registerUser = async(req,res)=>{
     try {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {    //agar user he to ye message
      return res.status(400).json({ message: "User already exists" }); // ye status me jo he vo frontend ko batayega error he ya successfull ho gya
    }
     const hashedPassword = await bcrypt.hash(password, 10);   //password ko secrete rakho smaj nahi aayega kisiko

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "User registered successfully"
    });
}
catch(error){
 res.status(500).json({ message: error.message });
}
}


export const Loginuser = async(req,res)=>{
    try {
         const { email, password } = req.body;
         const user = await User.findOne({email})

           if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
     const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    
    const token = jwt.sign(
        { id: user._id, role: user.role},
        process.env.JWT_SECRET,

     { expiresIn: "7d" }
    )
 res.json({
      token,
      role: user.role
    });

    } catch (error) {
    res.status(500).json({ message: error.message });
  }
}