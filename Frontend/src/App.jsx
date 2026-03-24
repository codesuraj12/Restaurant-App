import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'

import { Outlet } from 'react-router-dom'


function App() {


  return (
    <>
      <div className=' text-white'
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
