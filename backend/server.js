import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodrouter from "./route/foodRoute.js"

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// DB connection
connectDB();

// API endpoints
app.use("/api/food", foodrouter)
app.use("/images", express.static('upload'))

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://NomNom:nomnom01@cluster0.cinuibp.mongodb.net/?