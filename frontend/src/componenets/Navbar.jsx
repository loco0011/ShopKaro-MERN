import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = React.useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    setToken("");
    localStorage.removeItem("token");
    setCartItems({});
  };

  return (
    <div className="flex justify-between items-center py-5 font-medium">
      <Link to="/" className="flex items-center group">
        <div className="relative">
          {/* Main Logo Container */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-white/20 group-hover:shadow-xl transition-all duration-300">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Logo Text */}
            <div className="relative flex items-center gap-2">
              {/* Icon */}
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <h1 className="text-2xl font-black bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-800 bg-clip-text text-transparent leading-none tracking-tight">
                  Shop<span className="text-purple-600">Karo</span>
                </h1>
                <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest leading-none mt-0.5">Premium Store</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1 right-2 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-1 left-2 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
          </div>

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm"></div>
        </div>
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <li>
          <NavLink className="flex flex-col items-center gap-1" to="/">
            {" "}
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex flex-col items-center gap-1"
            to="/collection"
          >
            {" "}
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink className="flex flex-col items-center gap-1" to="/about">
            {" "}
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink className="flex flex-col items-center gap-1" to="/contact">
            {" "}
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="Search"
          className="h-6"
        />

        <div className="group relative">
          <Link to="/login">
            <img
              onClick={() => (token ? null : navigate("/login"))}
              src={assets.profile_icon}
              alt="User"
              className="w-5 cursor-pointer"
            />
          </Link>
          {token && (
            <div className="group-hover:flex hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={() => navigate("/orders")} className="cursor-pointer hover:text-black">My Orders</p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="Cart" className="h-6" />
          <div className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-500 text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </div>
        </Link>
        <img
          onClick={() => setVisible(!visible)}
          src={assets.menu_icon}
          alt="Menu"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 bg-white transition-all ${
          visible ? "w-full" : "w-0 hidden"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center cursor-pointer gap-4 p-3"
          >
            <img
              src={assets.dropdown_icon}
              alt="Logo"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
