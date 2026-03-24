import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>

 <ul className="space-y-4">
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">

<Link to= '/admindashboard/dashboard'> 
          Dashboard
          </Link>
        </li>

        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            <Link to= '/admindashboard/add-food'> 
        
          Add Food
          </Link>

         
        </li>

        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
            <Link to= '/admindashboard/manage-food'> 
          Manage Food
          </Link>
         
        </li>
     
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
        </ul>
      </div>
  )
}

export default Sidebar