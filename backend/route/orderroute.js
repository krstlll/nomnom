import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder,listOrders,updateStatus } from "../controller/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.get("/list", listOrders)
orderRouter.post("/status", updateStatus )

export default orderRouter;