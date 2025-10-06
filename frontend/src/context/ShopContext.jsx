import { createContext, use, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product size");
      return;
    }

    let cartData = structuredClone(cartItems);

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
    setCartItems(cartData);

    if (token) {
      try {
        // Check if jwtDecode is working
        let decodedToken;
        try {
          decodedToken = jwtDecode(token);
        } catch (decodeError) {
          toast.error("Invalid token. Please login again.");
          return;
        }

        const response = await axios.post(
          `${backend_url}/api/cart/add`,
          {
            userId: decodedToken.id,
            itemId,
            size,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.data.success) {
          toast.success("Item added to cart successfully!");
        } else {
          toast.error(response.data.message || "Failed to add item to cart");
        }
      } catch (error) {
        toast.error("Could not add item to cart");
      }
    } else {
      toast.info("Please login to add items to cart");
    }
  };  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (err) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);

        const response = await axios.put(
          `${backend_url}/api/cart/update`,
          {
            userId: decodedToken.id,
            itemId,
            size,
            quantity,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.data.success) {
          // Update local cart with the response from database
          setCartItems(response.data.cartData);
          if (quantity === 0) {
            toast.success("Item removed from cart");
          } else {
            toast.success("Cart updated successfully");
          }
        } else {
          toast.error(response.data.message || "Could not update cart item");
        }
      } catch (error) {
        toast.error("Could not update cart item");
      }
    } else {
      // If no token, just update locally
      let cartData = structuredClone(cartItems);
      if (quantity === 0) {
        if (cartData[itemId] && cartData[itemId][size]) {
          delete cartData[itemId][size];
          if (Object.keys(cartData[itemId]).length === 0) {
            delete cartData[itemId];
          }
        }
      } else {
        if (!cartData[itemId]) {
          cartData[itemId] = {};
        }
        cartData[itemId][size] = quantity;
      }
      setCartItems(cartData);
    }
  };  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (err) {}
      }
    }
    return totalAmount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backend_url}/api/product/list`);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error("Could not fetch products data");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getUserCart = async () => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const response = await axios.post(
          `${backend_url}/api/cart/get`,
          { userId: decodedToken.id },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.data.success) {
          setCartItems(response.data.cartData);
        } else {
          toast.error("Could not fetch cart data");
        }
      } catch (error) {
        toast.error("Could not fetch cart data");
      }
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    if (token) {
      getUserCart();
    }
  }, [token]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    getUserCart,
    navigate,
    backend_url,
    token,
    setToken,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
