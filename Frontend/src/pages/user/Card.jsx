import React from 'react'

const Card = ({ food, handleOrder }) => {

console.log(food)

  if (!food) return null;
  
  return (
   <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 w-72 flex flex-col">

  {/* Image */}
  <div className="relative">
    <img
      src={food?.image}
      alt={food?.name}
      className="w-full h-48 object-cover"
    />

 
    <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full text-white shadow
      ${food?.category === "Veg" ? "bg-green-500" : "bg-red-500"}`}>
      {food?.category}
    </span>
  </div>

  {/* Content */}
  <div className="p-4 flex flex-col flex-grow">

    <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
      {food?.name}
    </h2>

    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
      {food?.description}
    </p>

    <div className="flex items-center justify-between mt-3">
      <p className="text-amber-600 font-bold text-lg">
        ₹{food?.price}
      </p>
    </div>


    <button
      onClick={() => handleOrder(food)}
      className="mt-auto bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 font-medium"
    >
      Order Now
    </button>

  </div>
</div>

  )
}

export default Card