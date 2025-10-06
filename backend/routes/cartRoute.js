import express from 'express';
import { addCartItems, getCartItems, updateCartItems } from '../controllers/cartController.js';
import { authUser } from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post('/add', authUser, addCartItems);
cartRouter.put('/update', authUser, updateCartItems);
cartRouter.post('/get', authUser, getCartItems);

export default cartRouter;
