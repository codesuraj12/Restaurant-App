import React, { useState, useEffect } from 'react'
import Skeleton from '../../Skeleton'
import Card from './Card'
import axios from 'axios'
import { Search, UtensilsCrossed } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

const Foodcards = () => {
  const [loading, setLoading] = useState(true)
  const [foods, setFoods] = useState([])
  const [search, setSearch] = useState("")
  const [fetchError, setFetchError] = useState(false)
  const [orderingId, setOrderingId] = useState(null)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/food`)
        setFoods(res.data)
        setFetchError(false)
      } catch (error) {
        console.error(error)
        setFetchError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchFood()
  }, [])

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  )

  const showToast = (message, type = "success") => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 2500)
  }

  const handleOrder = async (food) => {
    setOrderingId(food._id)

    try {
      const orderData = {
        items: [{ name: food.name, price: food.price, quantity: 1 }],
        totalAmount: food.price,
      }

      await axios.post(`${API_URL}/api/order`, orderData, {
        withCredentials: true, // sends the httpOnly auth cookie
      })

      showToast(`${food.name} added to your order`, "success")
    } catch (error) {
      console.error(error.response?.data || error.message)
      showToast(
        error.response?.data?.message || "Could not place order. Please try again.",
        "error"
      )
    } finally {
      setOrderingId(null)
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-16">

      {/* Header + search */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <div className="text-center mb-6">
          <p className="text-sm tracking-widest text-amber-600 font-semibold mb-2">
            ___ OUR MENU
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explore Our Dishes
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search for a dish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-white
                         shadow-sm outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500
                         transition-colors duration-200"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array(8).fill().map((_, i) => <Skeleton key={i} />)}
          </div>
        ) : fetchError ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-gray-500 mb-4">Couldn't load the menu right now.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : filteredFoods.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500">
            <UtensilsCrossed size={40} className="mb-3 text-gray-300" />
            <p>No dishes match "{search}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFoods.map((food) => (
              <Card
                key={food._id}
                food={food}
                handleOrder={handleOrder}
                isOrdering={orderingId === food._id}
              />
            ))}
          </div>
        )}
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-xl shadow-lg
                      text-white text-sm font-medium animate-fadeIn z-50
                      ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {toast.message}
        </div>
      )}
    </div>
  )
}

export default Foodcards