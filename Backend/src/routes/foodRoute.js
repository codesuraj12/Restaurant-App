import express from 'express'
import { Addfood , deleteFood, Getfood,Upadatefood } from '../controllers/foodController.js'
import { protect } from '../middleware/authMiddleware.js'
import { adminOnly } from '../middleware/adminMiddleware.js'


const router = express.Router()

// get all foods (user)
router.get("/",Getfood)

// add food (admin only)
router.post("/", protect,adminOnly,Addfood)

// delete food (admin only)
router.delete("/:id", protect, adminOnly, deleteFood)

//update food (admin only)
router.put("/:id", protect, adminOnly, Upadatefood)

export default router