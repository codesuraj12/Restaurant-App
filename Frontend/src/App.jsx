import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'

import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
   const timer =  setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, []);

  if(loading){
    return  (
     <div className="h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
    )
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
