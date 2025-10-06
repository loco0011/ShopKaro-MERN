import React, { useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../componenets/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../componenets/CartTotal";

const Cart = () => {
  const { products, cartItems, currency, updateQuantity, navigate } =
    React.useContext(ShopContext);

  const [cartData, setCartData] = React.useState([]);

  useEffect(() => {
    if (!products.length) return;
    let tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems, products]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 pt-14 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-pink-100/30 -z-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMGYwZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 -z-10"></div>

      <div className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <Title text1={"YOUR"} text2={"CART"} />
          </div>
          <p className="text-gray-600 mt-4 text-lg">Review your selected items</p>
        </div>

        {cartData.length === 0 ? (
          /* Empty Cart State */
          <div className="text-center py-20">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 max-w-md mx-auto border border-white/20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-content">
                <svg className="w-12 h-12 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m4.5-5h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h3>
              <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
              <button
                onClick={() => navigate("/collection")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Shopping
              </button>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-gray-800">Cart Items ({cartData.length})</h2>
                </div>

                <div className="divide-y divide-gray-100">
                  {cartData.map((item, index) => {
                    const productData = products.find(
                      (product) => product._id === item._id
                    );
                    return (
                      <div
                        key={index}
                        className="p-6 hover:bg-gray-50/50 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-6">
                          {/* Product Image */}
                          <div className="relative">
                            <img
                              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                              src={productData.image[0]}
                              alt={productData.name}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
                          </div>

                          {/* Product Details */}
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-purple-600 transition-colors duration-300">
                              {productData.name}
                            </h3>

                            <div className="flex items-center gap-4 mb-3">
                              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {item.size}
                              </div>
                              <div className="text-2xl font-bold text-gray-800">
                                {currency}{(productData.price).toFixed(2)}
                              </div>
                            </div>

                            <div className="text-sm text-gray-600">
                              Subtotal: <span className="font-semibold text-gray-800">{currency}{(productData.price * item.quantity).toFixed(2)}</span>
                            </div>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-4">
                            <div className="flex items-center bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                              <button
                                onClick={() => updateQuantity(item._id, item.size, Math.max(1, item.quantity - 1))}
                                className="px-3 py-2 hover:bg-gray-100 transition-colors duration-200 text-gray-600 hover:text-gray-800"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>
                              </button>

                              <input
                                onChange={(e) => {
                                  const newQuantity = Number(e.target.value);
                                  if (e.target.value === "" || newQuantity === 0) {
                                    updateQuantity(item._id, item.size, 0);
                                  } else if (newQuantity > 0) {
                                    updateQuantity(item._id, item.size, newQuantity);
                                  }
                                }}
                                onBlur={(e) => {
                                  if (e.target.value === "") {
                                    updateQuantity(item._id, item.size, 0);
                                  }
                                }}
                                className="w-16 text-center py-2 bg-transparent border-none outline-none font-semibold text-gray-800"
                                type="number"
                                min={1}
                                value={item.quantity}
                              />

                              <button
                                onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                                className="px-3 py-2 hover:bg-gray-100 transition-colors duration-200 text-gray-600 hover:text-gray-800"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                                </svg>
                              </button>
                            </div>

                            {/* Remove Button */}
                            <button
                              onClick={() => updateQuantity(item._id, item.size, 0)}
                              className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-200 group"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="lg:col-span-1">
              <div className="sticky top-6">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
                  </div>

                  <div className="p-6">
                    <CartTotal />

                    <button
                      onClick={() => navigate("/place-order")}
                      className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 rounded-2xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <span>Proceed to Checkout</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>

                    <div className="mt-4 text-center">
                      <button
                        onClick={() => navigate("/collection")}
                        className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="mt-6 bg-white/60 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H10m4-6V7a2 2 0 00-2-2H8a2 2 0 00-2 2v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Secure Checkout</p>
                      <p className="text-gray-600 text-xs">Your information is protected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
