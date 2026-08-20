import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Eye, EyeOff, Mail, Lock, User, UtensilsCrossed, CheckCircle2 } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const validate = () => {
    const errors = {}

    if (!name.trim()) {
      errors.name = "Name is required"
    } else if (name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters"
    }

    if (!email.trim()) {
      errors.email = "Email is required"
    } else if (!EMAIL_REGEX.test(email.trim())) {
      errors.email = "Enter a valid email address"
    }

    if (!password) {
      errors.password = "Password is required"
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters"
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess(false)

    if (!validate()) return

    setLoading(true)

    try {
      await axios.post(`${API_URL}/api/auth/register`, {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      })

      setSuccess(true)
      setTimeout(() => navigate("/login"), 1200)
    } catch (err) {
      console.error(err.response?.data)
      setError(err.response?.data?.message || "Registration failed. Please try again.")
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
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
          <p className="text-sm text-gray-500 mt-1">Join us for fast, fresh meals</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: null }))
                }}
                className={`w-full border rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2
                           transition-colors duration-200
                           ${fieldErrors.name
                              ? "border-red-300 focus:ring-red-400 focus:border-red-400"
                              : "border-gray-300 focus:ring-amber-500 focus:border-amber-500"}`}
                placeholder="Enter your name"
                autoComplete="name"
              />
            </div>
            {fieldErrors.name && (
              <p className="text-red-500 text-xs mt-1.5">{fieldErrors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: null }))
                }}
                className={`w-full border rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2
                           transition-colors duration-200
                           ${fieldErrors.email
                              ? "border-red-300 focus:ring-red-400 focus:border-red-400"
                              : "border-gray-300 focus:ring-amber-500 focus:border-amber-500"}`}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            {fieldErrors.email && (
              <p className="text-red-500 text-xs mt-1.5">{fieldErrors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  if (fieldErrors.password) setFieldErrors((prev) => ({ ...prev, password: null }))
                }}
                className={`w-full border rounded-xl pl-10 pr-11 py-2.5 focus:outline-none focus:ring-2
                           transition-colors duration-200
                           ${fieldErrors.password
                              ? "border-red-300 focus:ring-red-400 focus:border-red-400"
                              : "border-gray-300 focus:ring-amber-500 focus:border-amber-500"}`}
                placeholder="At least 6 characters"
                autoComplete="new-password"
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
            {fieldErrors.password && (
              <p className="text-red-500 text-xs mt-1.5">{fieldErrors.password}</p>
            )}
          </div>

          {/* Server error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2.5 animate-fadeIn">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2.5 flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 size={18} className="text-green-600 shrink-0" />
              <p className="text-green-700 text-sm">Account created! Redirecting to login...</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || success}
            className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-300
                       disabled:cursor-not-allowed transition-colors duration-200
                       text-white font-semibold py-2.5 rounded-xl shadow-md shadow-amber-200
                       active:scale-[0.98]"
          >
            {loading ? "Creating account..." : "Register"}
          </button>

          <p className="text-center text-sm text-gray-500 pt-2">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-amber-600 font-medium cursor-pointer hover:text-amber-700 hover:underline"
            >
              Login here
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register