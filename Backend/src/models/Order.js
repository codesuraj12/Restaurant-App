import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    items: [
        {
            name: String,
            price: Number,
            quantity: Number
        }
    ],
    totalAmount: Number,
    status: {
        type: String,
        default: "pending" // pending → paid → failed
    },
    paymentId: String
}, { timestamps: true });


const Order = mongoose.model("Order", orderSchema)

export default Order; 