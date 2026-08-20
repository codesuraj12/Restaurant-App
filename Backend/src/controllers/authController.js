import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import emailService from "../services/email.service.js"
import { smartdevicemanagement } from "googleapis/build/src/apis/smartdevicemanagement/index.js";

/** 
* - User Registration ka logic

* - post /api/auth/register 
*/

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {    //agar user he to ye message
      return res.status(400).json({
        message: "User already exists"
      }); // ye status me jo he vo frontend ko batayega error he ya successfull ho gya
    }
    const hashedPassword = await bcrypt.hash(password, 10);   //password ko secrete rakho smaj nahi aayega kisiko

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

 
    
  res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
     await emailService.sendRegistration(user.email, user.name)  //ye mail bhejega
   
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}


/** 
* - Login  ka logic

* - post /api/auth/login
*/

export const Loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,

      { expiresIn: "7d" }
    )

    res.cookie("token", token,{
      httpOnly:true,
      secure: process.env.NODE_ENV === "production",  //ye production me true hoga aur development me false hoga
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",  //ye production me none hoga aur development me lax hoga
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(200).json({
     
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


export const getMe = async(req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ message: "Not authenticated" });
  }
};
 
export const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  });
  res.status(200).json({ message: "Logged out successfully" });
};