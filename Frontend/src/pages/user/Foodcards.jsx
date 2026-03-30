import React, { useState, useEffect } from 'react'
import Skeleton from '../../Skeleton';
import Card from './Card';
import axios from 'axios';
import { motion } from 'framer-motion';

const Foodcards = () => {

  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([])

const [search, setSearch] = useState("");

  /**
   * useEffect is for getting food data
   * api url env file se aata he
   */

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {

    const fetchfood = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/food`)
        setFoods(res.data)

        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(true)
      }

    }
    fetchfood()

  }, [])

  const filterfoods = foods.filter((food)=>
   food.name.toLowerCase().includes(search.toLowerCase())
  )

  //this is for handleorder

  const handleOrder = async (food) => {
    try {

      const orderData = {
        items: [
          {
            name: food.name,
            price: food.price,
            quantity: 1
          }
        ],
        totalAmount: food.price
      };

      const res = await axios.post(
        `${API_URL}/api/order`,
        orderData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      console.log(res.data)

      alert("Order placed successfully");

    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };


  return (

    <div className='min-h-screen bg-slate-500 pt-24'>
 <div
    className="flex justify-center"
   
  >

      <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <input
      type="text"
      placeholder="Search food..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-[90%] md:w-[400px] px-4 py-2 rounded-full outline-none border text-white border-gray-300 focus:ring-2 focus:ring-slate-800"
    />
    </motion.div>

  </div>


      <div className=' flex gap-4 py-10 justify-center flex-wrap'>

        {

          loading ? (
            Array(4).fill().map((_, i) => <Skeleton key={i} />)
          ) :
            (filterfoods.map((food) => (
              <Card key={food._id}
                food={food}
                handleOrder={handleOrder}

              />
            ))
            )
        }

      </div>
    </div>
  )
}

export default Foodcards