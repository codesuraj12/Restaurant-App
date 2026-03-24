import React from 'react'
import { useState } from 'react';

const Managefood = () => {

 const [foods, setFoods] = useState([
    { id: 1, name: "Burger", price: 120, category: "Fast Food" },
    { id: 2, name: "Pizza", price: 250, category: "Italian" },
    { id: 3, name: "Pasta", price: 180, category: "Italian" }
  ]);

  const handleDelete = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  return (
   <div className="p-6 bg-white rounded-lg shadow">

      <h2 className="text-2xl font-bold mb-6">Manage Food</h2>

      <div className="overflow-x-auto">
        <table className="w-full border">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Food Name</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {foods.map((food) => (
              <tr key={food.id} className="text-center">

                <td className="p-3 border">{food.name}</td>
                <td className="p-3 border">₹{food.price}</td>
                <td className="p-3 border">{food.category}</td>

                <td className="p-3 border">
                  <button
                    onClick={() => handleDelete(food.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default Managefood