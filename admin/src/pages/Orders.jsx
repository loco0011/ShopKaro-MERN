import React from "react";
import { useEffect } from "react";
import axios from "axios";
import assets from "../assets/admin_assets/assets";
import { toast } from "react-toastify";

const Orders = ({ token }) => {
  const [orderData, setOrderData] = React.useState([]);
  const currency = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
  const fetchAllOrders = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        `${backendUrl}/api/order/fulllist`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data && response.data.success) {
        setOrderData(response.data.orders || []);
      } else {
        toast.error("Failed to load orders");
        setOrderData([]);
      }
    } catch (error) {
      console.error("Error loading order data:", error);
      toast.error("Error loading order data");
      setOrderData([]); // Set empty array on error to prevent crashes
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(`${backendUrl}/api/order/status`, {
        orderId,
        status: e.target.value
      },{headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },});
      if(response.data && response.data.success) {
        await fetchAllOrders();
        toast.success("Order status updated");
      }
    } catch (error) {
      toast.error("Error updating order status");
    }
  };

  useEffect(() => {
    if (token) {
      fetchAllOrders();
    }
  }, [token]);

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {orderData.length === 0 ? (
          <p>No orders found</p>
        ) : (
          orderData.map((order, index) => (
            <div className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700" key={index}>
              <img className="w-12" src={assets.parcel_icon} alt="" />
              <div>
                <div>
                  {order.items &&
                    order.items.map((item, itemIndex) => {
                      if (itemIndex === order.items.length - 1) {
                        return (
                          <p className="py-0.5" key={itemIndex}>
                            {item.name} X {item.quantity}{" "}
                            <span>{item.size}</span>
                          </p>
                        );
                      } else {
                        return (
                          <p className="py-0.5" key={itemIndex}>
                            {item.name} X {item.quantity}{" "}
                            <span>{item.size}</span>,
                          </p>
                        );
                      }
                    })}
                </div>
                <p className="mt-3 mb-2 font-medium">
                  {order.shippingAddress?.firstName}{" "}
                  {order.shippingAddress?.lastName}
                </p>
                <div>
                  <p>{order.shippingAddress?.street},</p>
                  <p>
                    {order.shippingAddress?.city}, {order.shippingAddress?.state}{" "}
                    {order.shippingAddress?.zipcode}
                  </p>
                </div>
                <p>{order.shippingAddress?.phone}</p>
              </div>
              <div>
                <p className="text-sm sm:text-[15px]">Items: {order.items?.length || 0}</p>
                <p className="mt-3">Payment Method: {order.paymentMethod}</p>
                <p>
                  Payment Status: {order.paymentStatus ? "Paid" : "Pending"}
                </p>
                <p>
                  Date: {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <p className="text-sm sm:text-[15px]">
                {currency}
                {order.totalAmount}
                <select onChange={(e) => statusHandler(e, order._id)} value={order.orderStatus} className="p-2 font-semibold">
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delevery">Out for delevery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
