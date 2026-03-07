import React from 'react'

const Footer = () => {
  return (
   <div className="bg-gray-900 text-gray-300 py-6">

  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

    {/* Left */}
    <p className="text-sm">
      © {new Date().getFullYear()} Spice Delight. All rights reserved.
    </p>

    {/* Right */}
    <div className="flex gap-6 text-sm">
      <a href="#" className="hover:text-amber-500 transition duration-300">
        Privacy Policy
      </a>
      <a href="#" className="hover:text-amber-500 transition duration-300">
        Terms
      </a>
      <a href="#" className="hover:text-amber-500 transition duration-300">
        Contact
      </a>
    </div>

  </div>

</div>
  )
}

export default Footer