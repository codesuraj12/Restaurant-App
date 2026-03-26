import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import axios from 'axios'



const Register = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",

  })

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000" ;

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmpassword } = formdata;

    if (!name || !email || !password || !confirmpassword) {
      setError("All fields are required");
      return;
    }
if (!email.includes("@")) {
  setError("Enter valid email");
  return;
}

    if (password !== confirmpassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true)
    try {
      const res = await axios.post(`${API_URL}/api/auth/register`, {
        name, email, password
      })
      setLoading(false);
      console.log(res.data)

      setError("");
      alert("User Registered Successfully")


      setFormdata({
        name: "",
        password: "",
        email: "",
        confirmpassword: ""
      })

      navigate("/login");

    } catch (error) {
      const message = error.response?.data?.message || "Registration failed";
      setError(message);
    }




  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}


        className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              value={formdata.name}
              name='name'
              onChange={handlechange}
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name='email'
              value={formdata.email}
              onChange={handlechange}
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name='password'
              value={formdata.password}
              onChange={handlechange}
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              name='confirmpassword'
              value={formdata.confirmpassword}
              onChange={handlechange}
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm password"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}

            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 rounded-xl shadow-md"
          >
           {loading ? "Registering..." : "Register"}
          </motion.button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 font-medium cursor-pointer hover:underline ml-1"
          >
            Login here
          </span>
        </p>
      </motion.div>
    </div>
  )
}

export default Register