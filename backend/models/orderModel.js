import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: {type: Array, required: true},
    totalAmount: { type: Number, required: true },
    shippingAddress: { type: Object, required: true },
    orderStatus: { type: String, default: 'Processing' },
    paymentMethod: { type: String, required: true },
    paymentStatus: { type: String, default: 'Pending' },
}, { timestamps: true });

const OrderModel = mongoose.model('Order', orderSchema);

export default OrderModel;
