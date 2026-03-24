import React from 'react'
import { useState } from 'react';
import axios from 'axios'


const Addfood = () => {

const [food, setFood] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: ""
  });

  const handleChange = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();


try {
  
const res = await axios.post(          //axios.post(url, data, config)  yha food data send hoga with config ke sath
  "http://localhost:5000/api/food",
  food,
  {
    headers:{
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }
)

console.log("Food Added:", food);
alert("Food added successfully");
    // later you can send this to backend API
 setFood({
      name: "",
      price: "",
      category: "",
      image: "",
      description: ""
    });
 

} catch (error) {
  
console.log(error.response?.data || error.message)
}

};



  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">

      <h2 className="text-2xl font-bold mb-6">Add Food</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={food.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={food.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={food.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={food.image}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="description"
          placeholder="description"
          value={food.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add Food
        </button>

      </form>

    </div>
  )
}

export default Addfood