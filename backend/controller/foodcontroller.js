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
const removeFood = async (req, res) => {
    try {
      // Find the food item by its ID
      const food = await foodModel.findById(req.body.id);
      if (!food) {
        return res.json({ success: false, message: "Food not found" });
      }
  
      // Remove the image file associated with the food item
      fs.unlink(`upload/${food.image}`, (err) => {
        if (err) {
          console.error("Error removing image file:", err);
        }
      });
  
      // Delete the food item from the database
      await foodModel.findByIdAndDelete(req.body.id);
  
      res.json({ success: true, message: "Food removed successfully" });
    } catch (error) {
      console.error("Error removing food:", error);
      res.json({ success: false, message: "Error removing food" });
    }
  };

// test


export {addFood, listFood, removeFood}