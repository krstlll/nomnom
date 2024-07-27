import foodModel from "../model/foodModel.js";
import fs from 'fs'

// add food item
const addFood = async(req, res) => {
    
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try {
        await food.save();
        res.json({success:true, message:"Food Added"})
    } catch(error) {
        console.log(error)
        response.json({success:false, message:"Error!"})
    }
}

// food list
const listFood = async(req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data:foods})

    } catch (error) {
        console.log(error);
        res.json({sucess:false, message:"Error"})
    }
}

// remove food
const removeFood = async(req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`upload/${food.image}`, ()=>{})

        await foodModel.findById(req.body.id);
        res.json({success:true, message: "Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export {addFood, listFood, removeFood}