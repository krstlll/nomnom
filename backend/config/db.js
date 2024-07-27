import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://NomNom:nomnom01@cluster0.cinuibp.mongodb.net/nomnom').then(()=>console.log("DB Connected"));
}

