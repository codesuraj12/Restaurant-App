import React from 'react'

const Card = ( {image, title,description,price,category}) => {
  return (
   <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 w-72">
   
   <div className="relative">

    <img 
      src={image} 
      alt={title} 
      className="w-full h-48 object-cover"
    />

    <span className={`absolute top-3 right-3 px-4 py-2 text-xs font-semibold rounded-lg text-white 
      ${category === "Veg" ? "bg-green-500" : "bg-red-500"}`}>
      {category}
    </span>

  </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {title}
        </h2>

        <p className="text-sm text-gray-600 mt-2">
          {description}
        </p>

        <p className="text-amber-600 font-bold mt-3">
          ₹{price}
        </p>
      </div>

   </div>
        
  )
}

export default Card