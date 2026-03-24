import React from 'react'

const Maindashboard = () => {
  return (
     <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Total Users</h3>
            <p className="text-3xl font-bold mt-2">120</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Orders</h3>
            <p className="text-3xl font-bold mt-2">75</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500">Revenue</h3>
            <p className="text-3xl font-bold mt-2">₹25,000</p>
          </div>

        </div>
  )
}

export default Maindashboard