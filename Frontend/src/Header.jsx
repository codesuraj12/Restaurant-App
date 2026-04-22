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
     
      }
      else {
        setScroll(false)
   
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
    <>
   <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scroll || isOpen
          ? "bg-white/80 backdrop-blur-md text-gray-800 shadow-sm"
          : "bg-transparent text-gray-200"
      }`}
    >
        <div className=" max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">


          <div className="text-3xl font-serif font-semibold tracking-wider">
            <span className="text-orange-500">Spice</span>{" "}
            <span className="italic">Delight</span>
          </div>

          <div className="hidden md:flex gap-16 font-medium">
            <Link to="/" className="hover:text-orange-500 transition "> Home </Link>
            <Link to="/about" className="hover:text-orange-500 transition "> About </Link>

            <Link to="/contact" className="hover:text-orange-500 transition "> Contact </Link>

          </div>

          <div  className="md:hidden cursor-pointer text-2xl" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>
          <div className="hidden md:block">
            <button
            onClick={()=>navigate('/login')}
            className="px-5 py-2 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition ">
              Sign In
            </button>
          </div>


        </div>
      </div>

 </nav>

      {/* Mobile screen */}

<div
      className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* CLOSE BUTTON */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setIsOpen(false)}
          className="text-2xl"
        >
          ✕
        </button>
      </div>

      {/* MENU ITEMS */}
      <div className="flex flex-col justify-between h-[80%] px-6 py-6 text-gray-800 font-medium">

        <div className="flex flex-col gap-6 mt-6">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <button
          onClick={() => {
            setIsOpen(false);
            navigate("/login");
          }}
          className="w-full py-2 bg-orange-600 text-white rounded-full"
        >
          Sign In
        </button>

      </div>
    </div>
   </>
  )
}

export default Header