import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
     name: {
      type: String,
      required: [true, "Name is Required"]
    },
      email: {
      type: String,
      required: [true, "Email is required for creating a user"],  //yha 2 true aur error aise diya he
      unique: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address'],
      trim:true,
      lowercase:true
    },
     password: {
      type: String,
          required: [true, "Password is Required"],
          minlength: [6, "password should contain more that 6 character"]
    },
     role: {
      type: String,
      enum: ["user", "admin"],    //ye  user aur admin ke liye
      default: "user"
    }
},
 {
    timestamps: true
  }
)

const User = mongoose.model("User",Userschema)

export default User;