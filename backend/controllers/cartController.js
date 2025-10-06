import UserModel from "../models/userModel.js";


//add product to user cart
const addCartItems = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: 'User ID is required'
            });
        }

        const userData = await UserModel.findById(userId);

        if (!userData) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        let cartData = userData.cartData || {};

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            { cartData },
            { new: true }
        );

        res.json({ success: true, message: 'Item added to cart', cartData });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
}

//update cart
const updateCartItems = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: 'User ID is required'
            });
        }

        const userData = await UserModel.findById(userId);

        if (!userData) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        let cartData = userData.cartData || {};

        if (quantity === 0) {
            // Remove item from cart if quantity is 0
            if (cartData[itemId] && cartData[itemId][size]) {
                delete cartData[itemId][size];
                // If no sizes left for this item, remove the item completely
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            }
        } else {
            // Update quantity
            if (!cartData[itemId]) {
                cartData[itemId] = {};
            }
            cartData[itemId][size] = quantity;
        }

        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            { cartData },
            { new: true }
        );

        res.json({ success: true, message: 'Cart updated successfully', cartData });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
}
//get user cart
const getCartItems = async (req, res) => {
    try {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: 'User ID is required'
            });
        }

        const userData = await UserModel.findById(userId);

        if (!userData) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        const cartData = userData.cartData || {};

        res.json({ success: true, cartData });
    } catch (error) {
        console.error("Error in getCartItems:", error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
}

export { addCartItems, updateCartItems, getCartItems };
