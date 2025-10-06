import React from "react";
import Title from "../componenets/Title";
import Cart from "./Cart";
import CartTotal from "../componenets/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = React.useState("cod");
  const { navigate, backend_url, token, cartItems, setCartItems, getUserCart, getCartAmount, delivery_fee, products } = React.useContext(ShopContext);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
           const itemInfo = products.find((product) => product._id === items);
           if(itemInfo) {
              orderItems.push({
                productId: items,
                name: itemInfo.name,
                price: itemInfo.price,
                size: item,
                quantity: cartItems[items][item],
                image: itemInfo.image[0],
              });
           }
          }
        }
      }
      let orderData = {
        shippingDetails: { address: formData },
        cartItems: orderItems,
        totalAmount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod":
          try {
            const response = await axios.post(
              `${backend_url}/api/order/place/cod`,
              orderData,
              { headers: { Authorization: `Bearer ${token}` } }
            );
            if (response.data.success) {
              toast("Order placed successfully!");
              setCartItems({});
              getUserCart();
              navigate("/orders");
            } else {
              toast.error("Could not place the order");
            }
          } catch (apiError) {
            if (apiError.response) {
              // Server responded with error status
              const errorMessage = apiError.response.data?.message || "Server error occurred";
              toast.error(`Order failed: ${errorMessage}`);
            } else if (apiError.request) {
              // Request was made but no response received
              toast.error("Backend server is not running. Please start the backend server.");
            } else {
              // Something else happened
              toast.error("An unexpected error occurred");
            }
            return; // Don't continue with other payment methods
          }
          break;
        case "stripe":
          const stripeResponse = await axios.post(
            `${backend_url}/api/order/place/stripe`,
            orderData,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          // Handle Stripe response
          break;
        case "razorpay":
          const razorpayResponse = await axios.post(
            `${backend_url}/api/order/place/razorpay`,
            orderData,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          // Handle Razorpay response
          break;
        default:
          toast.error("Please select a payment method");
      }

    } catch (error) {
      toast.error("Failed to place order. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Billing Address */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[400px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"BILLING"} text2={"DETAILS"} />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          required
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          required
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street Address"
        />
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zipcode"
          />
          <input
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          required
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>
      {/* Order Summary */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/*payment method selection*/}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : "bg-transparent"
                } `}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : "bg-transparent"
                } `}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : "bg-transparent"
                } `}
              ></p>
              <p className="text-sm text-gray-500 font-medium mx-4">
                Cash on Delivery
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white py-3 px-16 text-sm"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
