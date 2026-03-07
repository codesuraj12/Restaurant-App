import React, { useState } from 'react'

import {  useNavigate } from 'react-router-dom';
import { easeOut, motion } from "framer-motion";

const Login = () => {
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setError("");

    // You can add login API call here
    console.log("Login Data:", { email, password });

    alert("Login successful (demo)");

    setEmail("");
     setPassword("");
  };

  return (


    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <motion.div
      initial={{ opacity:0, y:40 }}
      animate ={{opacity:1, y:0}}
      transition={{duration:0.6,ease: "easeOut"}}
      className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter email"
            />
          </div>
              <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter password"
            />
          </div>

          {error && (
            <motion.p 
            initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            className="text-red-500 text-sm">{error}</motion.p>
          )}

          <motion.button
          whileHover={{ scale: 1.03}}
          whileTap={{scale:0.97}}

            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 rounded-xl"
          >
            Login
          </motion.button>

 <p className="text-center text-sm mt-4">
            Don’t have an account?
            <span
              onClick={() => navigate("/register")}
              className="text-blue-600 font-medium cursor-pointer hover:underline ml-1"
            >
              Register here
            </span>
          </p>

        </form>
      </motion.div>
    </div>
  )
}

export default Login