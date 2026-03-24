import React from 'react'

const Navbar = () => {
  return (
     <div className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Dashboard</h2>

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Logout
          </button>
        </div>
  )
}

export default Navbar