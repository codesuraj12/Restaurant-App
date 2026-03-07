import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {

    const handlescroll = () => {
      if (window.scrollY > 50) {

        setScroll(true)
        console.log('true')
      }
      else {
        setScroll(false)
        console.log('false')
      }
    }
    window.addEventListener('scroll', handlescroll)
    return () => window.removeEventListener('scroll', handlescroll)
  }, [])



  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isOpen]);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all text-gray-200  duration-300 ${scroll || isOpen ? "bg-white/80 backdrop-blur-md text-gray-800 shadow-sm " : "bg-transparent  border-gray-800 border"}`}>
      <div className=" max-w-7xl mx-auto px-6">
        <div className={`flex justify-between items-center transition-all duration-300 h-20`}>


          <div className="text-3xl font-serif font-semibold tracking-wider">
            <span className="text-orange-500">Spice</span>{" "}
            <span className="italic">Delight</span>
          </div>

          <div className="hidden md:flex gap-16 font-medium">
            <Link to="/" className="hover:text-orange-500 transition duration-200"> Home </Link>
            <Link to="/about" className="hover:text-orange-500 transition duration-200"> About </Link>

            <Link to="/contact" className="hover:text-orange-500 transition duration-200"> Contact </Link>

          </div>

          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>
          <div className="hidden md:block">
            <button
            onClick={()=>navigate('/login')}
            className="px-5 py-2 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition duration-300">
              Sign In
            </button>
          </div>


        </div>
      </div>


      {/* Mobile screen */}

{/* dark overlay */}
{isOpen && (
  <div
    className="fixed inset-0 bg-black/40 md:hidden z-50"
    onClick={() => setIsOpen(false)}
  />
)}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-10 h-full px-6 py-8 text-gray-800 font-medium">
          <div className="flex flex-col space-y-6 px-6 mt-8 ">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
          <div>
            <button className="px-4 w-full  py-2 bg-orange-600 text-white rounded-full">
              Sign In
            </button>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Header