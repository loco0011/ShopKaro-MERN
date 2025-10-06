import express from "express";
import {
    placeOrderCOD,
    placeOrderRazorpay,
    placeOrderStripe,
    getAllOrders,
    getUserOrders,
    updateOrderStatus
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import { authUser } from "../middleware/auth.js";

const orderRouter = express.Router();

// Add routes
orderRouter.post('/fulllist', adminAuth, getAllOrders);
orderRouter.post('/status', adminAuth, updateOrderStatus);

// Payment routes
orderRouter.post('/place/cod', authUser, placeOrderCOD);
orderRouter.post('/place/razorpay', authUser, placeOrderRazorpay);
orderRouter.post('/place/stripe', authUser, placeOrderStripe);

// User orders
orderRouter.post('/userorders', authUser, getUserOrders);

export default orderRouter;
