import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Eye, EyeOff, Mail, Lock, UtensilsCrossed } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Email and password are required")
      return
    }

    setLoading(true)

    try {
      await axios.post(
        `${API_URL}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      )

      navigate("/foods")
    } catch (err) {
      console.error(err.response?.data)
      setError(err.response?.data?.message || "Invalid credentials")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-amber-100 p-8 animate-fadeIn">

        {/* Logo / brand mark */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center mb-4 shadow-md shadow-amber-200">
            <UtensilsCrossed className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-sm text-gray-500 mt-1">Log in to continue your order</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" size={18} />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-2.5
                           focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500
                           transition-colors duration-200"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" size={18} />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-xl pl-10 pr-11 py-2.5
                           focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500
                           transition-colors duration-200"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2.5 animate-fadeIn">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-300
                       disabled:cursor-not-allowed transition-colors duration-200
                       text-white font-semibold py-2.5 rounded-xl shadow-md shadow-amber-200
                       active:scale-[0.98]"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-sm text-gray-500 pt-2">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-amber-600 font-medium cursor-pointer hover:text-amber-700 hover:underline"
            >
              Register here
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login