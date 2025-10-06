import OrderModel from '../models/orderModel.js';
import UserModel from '../models/userModel.js';

// Place orders using Cash on Delivery

const placeOrderCOD = async (req, res) => {
    try {
        const { shippingDetails, cartItems, totalAmount } = req.body;
        const userId = req.userId; // Get userId from auth middleware

        if (!userId || !shippingDetails || !cartItems || !totalAmount) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        const newOrder = new OrderModel({
            userId,
            items: cartItems,
            totalAmount,
            shippingAddress: shippingDetails.address,
            orderStatus: 'Processing',
            paymentMethod: 'COD',
            paymentStatus: 'Pending'
        });

        await newOrder.save();
        await UserModel.findByIdAndUpdate(userId, { cartData: {} });

        res.status(201).json({
            success: true,
            message: 'Order placed successfully',
            order: newOrder
        });
    } catch (error) {
        console.error("Error in placeOrderCOD:", error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
}

// Place orders using Razorpay
const placeOrderRazorpay = async (req, res) => {
    try {
        const { shippingDetails, cartItems, totalAmount, paymentId } = req.body;
        const userId = req.userId; // Get userId from auth middleware

        if (!userId || !shippingDetails || !cartItems || !totalAmount || !paymentId) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        const newOrder = new OrderModel({
            userId,
            items: cartItems,
            totalAmount,
            shippingAddress: shippingDetails.address,
            orderStatus: 'Processing',
            paymentMethod: 'Razorpay',
            paymentStatus: 'Paid',
            paymentId
        });

        await newOrder.save();

        res.status(201).json({
            success: true,
            message: 'Order placed successfully',
            order: newOrder
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
}

// Place orders using Stripe
const placeOrderStripe = async (req, res) => {
    try {
        const { shippingDetails, cartItems, totalAmount, paymentId } = req.body;
        const userId = req.userId; // Get userId from auth middleware

        if (!userId || !shippingDetails || !cartItems || !totalAmount || !paymentId) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        const newOrder = new OrderModel({
            userId,
            items: cartItems,
            totalAmount,
            shippingAddress: shippingDetails.address,
            orderStatus: 'Processing',
            paymentMethod: 'Stripe',
            paymentStatus: 'Paid',
            paymentId
        });

        await newOrder.save();

        res.status(201).json({
            success: true,
            message: 'Order placed successfully',
            order: newOrder
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
}

// All Orders - Admin
const getAllOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find().populate('userId', 'name email');
        res.json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
}

// Get orders for a specific user
const getUserOrders = async (req, res) => {
    try {
        const userId = req.userId; // Get userId from auth middleware

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: 'User ID is required'
            });
        }

        const orders = await OrderModel.find({ userId });
        res.json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
}

// Update order status - Admin
const updateOrderStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;

        if (!orderId || !status) {
            return res.status(400).json({
                success: false,
                message: 'Order ID and status are required'
            });
        }

        const updatedOrder = await OrderModel.findByIdAndUpdate(orderId, { orderStatus: status }, { new: true });

        if (!updatedOrder) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        res.json({
            success: true,
            message: 'Order status updated successfully',
            order: updatedOrder
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
}

export {
    placeOrderCOD,
    placeOrderRazorpay,
    placeOrderStripe,
    getAllOrders,
    getUserOrders,
    updateOrderStatus
};