import express from 'express'
import dotenv from 'dotenv'
import connectDb from './src/config/db.js'
import authRoutes from './src/routes/authRoute.js'
import foodRoutes from './src/routes/foodRoute.js'
import orderRoutes from './src/routes/orderRoute.js'

import cors from 'cors'
import cookieParser from 'cookie-parser'
// import { createOrder } from './src/controllers/orderController.js'


dotenv.config()  //ye .env file ko nodejs me read krne ke liye aur variable ko process.env me store krta he

const app = express()

app.use(express.json()) //incoming request ke JSON data ko read karne ke liye use hota hai.ye sbse pehle lena he app.use me

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(cors({
  origin: FRONTEND_URL

}))

app.use(cookieParser())  //ye cookie hum authcontroller me use krenge

app.use("/api/auth",authRoutes)  //middleware ya routes ko register karne ke liye use hota hai.

app.use("/api/food",foodRoutes)

app.use("/api/order", orderRoutes)


connectDb()

const port = process.env.PORT || 3000

app.get('/', (req,res)=>{
res.send('Hello World')
})

app.listen(port, ()=>{
    console.log(`app listening on ${port}`)
  

})