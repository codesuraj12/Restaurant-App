import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, User, LogOut } from 'lucide-react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

const Header = () => {
  const [scroll, setScroll] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [checkingAuth, setCheckingAuth] = useState(true)

  const navigate = useNavigate()
  const location = useLocation()

  // Scroll shadow/blur effect
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => { document.body.style.overflow = "auto" }
  }, [isOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // Check auth status on mount (httpOnly cookie can't be read by JS,
  // so we ask the backend who the current user is)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/auth/me`, {
          withCredentials: true,
        })
        setUser(res.data.user)
      } catch {
        setUser(null)
      } finally {
        setCheckingAuth(false)
      }
    }
    checkAuth()
  }, [])

  const handleLogout = async () => {
    try {
      await axios.post(`${API_URL}/api/auth/logout`, {}, { withCredentials: true })
    } catch (err) {
      console.error(err)
    } finally {
      setUser(null)
      setIsOpen(false)
      navigate("/login")
    }
  }

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-orange-600 font-semibold"
      : "hover:text-orange-600 transition-colors duration-200"

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scroll || isOpen
            ? "bg-white/90 backdrop-blur-md text-gray-800 shadow-sm"
            : "bg-transparent text-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link to="/" className="text-3xl font-serif font-semibold tracking-wider">
              <span className="text-red-600">Spice</span>{" "}
              <span className="italic text-indigo-600">Delight</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex gap-16 font-medium">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className={navLinkClass}>
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop auth area */}
            <div className="hidden md:flex items-center gap-4">
              {checkingAuth ? (
                <div className="w-24 h-9 bg-gray-200/50 rounded-full animate-pulse" />
              ) : user ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <User size={16} className="text-orange-600" />
                    </div>
                    <span>{user.name?.split(" ")[0]}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 px-4 py-2 border border-gray-300 rounded-full
                               text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                  >
                    <LogOut size={15} />
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  className="px-5 py-2 bg-orange-600 text-white rounded-full font-medium
                             hover:bg-orange-700 transition-colors duration-200 shadow-sm shadow-orange-200"
                >
                  Sign In
                </button>
              )}
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-current"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transform
                    transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
          <span className="text-lg font-serif font-semibold">
            <span className="text-red-600">Spice</span>{" "}
            <span className="italic text-indigo-600">Delight</span>
          </span>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <div className="flex flex-col justify-between h-[calc(100%-77px)] px-6 py-6 text-gray-800 font-medium">
          <div className="flex flex-col gap-6 mt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "text-orange-600 font-semibold" : "hover:text-orange-600 transition-colors"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {checkingAuth ? (
            <div className="w-full h-10 bg-gray-100 rounded-full animate-pulse" />
          ) : user ? (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600 px-1">
                <User size={16} className="text-orange-600" />
                Signed in as <span className="font-semibold">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 py-2.5 border border-gray-300
                           rounded-full font-medium hover:bg-gray-50 transition-colors"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="w-full py-2.5 bg-orange-600 text-white rounded-full font-medium
                         hover:bg-orange-700 transition-colors"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Header