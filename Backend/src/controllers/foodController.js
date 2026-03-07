// Add food (admin)
// Get all food (users)
// Delete food (admin)


import Food from "../models/Foodmodel.js";


// add food(admin)

export  const Addfood = async(req,res)=>{
    try {
        
        const {name, description, price, image, category} = req.body;

        const food = new Food({
             name,
      description,
      price,
      image,
      category
        })

const savedfood = await food.save()
res.status(201).json(savedfood);

    } catch (error) {
     res.status(500).json({ message: error.message });
    }
}



// Get all food(user)

export const Getfood = async(req,res)=>{
    try {
        
const foods = await Food.find();
res.json(foods)

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// delete food(admin)


export const deleteFood = async (req, res) => {
  try {

    const food = await Food.findById(req.params.id);

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    await food.deleteOne();

    res.json({ message: "Food deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update food(admin)

export const Upadatefood = async(req,res)=>{

    const food = await Food.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
res.json(food)
}