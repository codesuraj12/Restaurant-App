import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Logo from './assets/restaurant-logo.png'

import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
   const timer =  setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, []);

if (loading) {
  return (
 
    <div className="h-screen flex flex-col items-center justify-center bg-white gap-3">
      <img
        src={Logo}
        alt="logo"
        className="w-18 h-18 object-contain"
      />
      <div className="w-48 h-0.5 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-gray-800 rounded-full animate-[progressBar_1.8s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}
  


  return (
    <>
      <div 
  >
   <Header/>
   <main >
  <Outlet/>
  </main>
  <Footer/>
  </div>
    </>
  )
}

export default App
