import axios from 'axios'
import React, { useState } from 'react';


import { useNavigate } from 'react-router-dom'



const AdminLogin = () => {

const navigate = useNavigate()
  const [formdata,setFormdata] = useState({
  email: "",
  password: ""
})

const [error, setError] = useState("");
 const [loading, setLoading] = useState(false)

const handleChange = (e)=>{
  setFormdata({
    ...formdata,
    [e.target.name] : e.target.value
  })
}

const handleSubmit = async(e)=>{

  e.preventDefault()
  const {email, password} = formdata;

  if(!email || !password){
    setError("All fields required")
    return
  }

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
 setLoading(true)
 setError("")

  try {
    
const res = await axios.post(`${API_URL}/api/auth/login`,
  {email,password}
)


const user = res.data.user  //ye authcontroller login mese aata he user ka data

if(user.role !== "admin"){
  setError("Acess denied")
      setLoading(false)
      return
}

localStorage.setItem("token",res.data.token) //ye browser me data store karne ke liye hota hai, taki user login hone ke baad bar-bar login na kare.
localStorage.setItem("user",JSON.stringify(user)) //  localStorage sirf string store karta hai, object nahi.

//jb user data vapis lena he tb- const user = JSON.parse(localStorage.getItem("user"))
// console.log(user.name)
// console.log(user.role) aise use kr skte he

alert("Admin Login Successful")

navigate("/admindashboard/dashboard")

  setFormdata({
      
      password: "",
      email: ""
      
    })

  } catch (error) {
    setError("Invalid credentials")
    console.log(error)
  }
finally {
      setLoading(false) 
    }
}


  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">

  <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
      Admin Login
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        type="email"
        name="email"
        placeholder="Admin Email"
        value={formdata.email}
        onChange={handleChange}
        
disabled={loading}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formdata.password}
        onChange={handleChange}
        disabled={loading}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
 {error && (
      <p className="text-red-500 text-sm ">
        {error}
      </p>

    )}
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300
          ${loading 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-blue-600 hover:bg-blue-700 text-white"}`}
      >
    {loading ? "Logging in..." : "Login"}
      </button>

    </form>
   

  </div>

</div>
  )
}

export default AdminLogin