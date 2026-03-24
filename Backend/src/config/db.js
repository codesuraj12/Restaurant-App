import mongoose from 'mongoose'

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongoose connected")
    } catch (error) {
         console.error("MongoDB connection failed:", error.message);
    process.exit(1); //agar database connect nhi to server ko yhi band krdo
    }



}

export default connectDb