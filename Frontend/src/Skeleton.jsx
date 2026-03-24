import React from 'react'

const Skeleton = () => {
  return (
   <div className="w-64 p-4 border rounded-lg shadow animate-pulse">
      <div className="h-40 bg-gray-300 rounded"></div>
      <div className="mt-4 h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded w-1/2"></div>
      <div className="mt-4 h-6 bg-gray-300 rounded w-1/4"></div>
    </div>
  )
}

export default Skeleton