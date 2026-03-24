import Order from "../models/Order.js";

export const createOrder = async (req,res) =>{
    try {

 if (!req.user) {
      return res.status(401).json({ message: "User not authorized" });
    }

        const {items, totalAmount} = req.body;

        const order = await Order.create({
            user: req.user._id,
            items,
            totalAmount
        });
res.json(order)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}