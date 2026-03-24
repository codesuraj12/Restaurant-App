import React, { useState,useEffect } from 'react'
import Skeleton from '../../Skeleton';
import Card from './Card';
import axios from 'axios';

const Foodcards = () => {

    const[loading,setLoading] = useState(true);
    const [foods,setFoods] = useState([])

/**
 * useEffect is for getting food data
 */

     useEffect(() => {
    
            const fetchfood = async () => {
                try {
                    const res = await axios.get("http://localhost:5000/api/food")
                    setFoods(res.data)
                    
                    setLoading(false)
                } catch (error) {
                    console.error(error)
                    setLoading(true)
                }
    
            }
            fetchfood()
    
        }, [])
    

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
      "http://localhost:5000/api/order",
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

    <div className='min-h-screen bg-slate-500'>
    <div className=' flex gap-4 py-20 justify-center flex-wrap'>

                        {

                            loading ? (
                                Array(4).fill().map((_, i) => <Skeleton key={i} />)
                            ) :
                                (foods.map((food) => (
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