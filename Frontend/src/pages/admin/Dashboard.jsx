import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
   <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
     <Sidebar/>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
       <Navbar/>

      
       <Outlet/>

      </div>
    </div>
  )
}

export default Dashboard