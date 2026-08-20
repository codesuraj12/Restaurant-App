import React from 'react'
import { Loader2 } from 'lucide-react'

const Card = ({ food, handleOrder, isOrdering }) => {
  if (!food) return null

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl
                    transition-shadow duration-300 flex flex-col">

      {/* Image */}
      <div className="relative">
        <img
          src={food?.image}
          alt={food?.name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <span
          className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full text-white shadow
            ${food?.category === "Veg" ? "bg-green-500" : "bg-red-500"}`}
        >
          {food?.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {food?.name}
        </h2>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2 min-h-[2.5rem]">
          {food?.description}
        </p>

        <div className="flex items-center justify-between mt-3 mb-4">
          <p className="text-amber-600 font-bold text-lg">
            ₹{food?.price}
          </p>
        </div>

        <button
          onClick={() => handleOrder(food)}
          disabled={isOrdering}
          className="mt-auto bg-amber-600 hover:bg-amber-700 disabled:bg-amber-300
                     disabled:cursor-not-allowed text-white py-2.5 rounded-lg
                     transition-colors duration-200 font-medium
                     flex items-center justify-center gap-2"
        >
          {isOrdering ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Ordering...
            </>
          ) : (
            "Order Now"
          )}
        </button>
      </div>
    </div>
  )
}

export default Card