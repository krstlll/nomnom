import express from "express"
import { addFood, listFood, removeFood} from "../controller/foodcontroller.js"
import multer from "multer"

const foodrouter = express.Router()

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"upload",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodrouter.post("/add", upload.single("image"), addFood)
foodrouter.get("/list", listFood)
foodrouter.post("/remove", removeFood);

export default foodrouter;