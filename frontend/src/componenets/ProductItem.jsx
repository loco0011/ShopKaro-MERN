import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, name, price, image }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer group">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] border border-gray-100">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-3xl">
          <img
            src={image[0]}
            alt={name}
            className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Floating Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            View Details
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Content */}
        <div className="p-6 bg-white/80 backdrop-blur-sm">
          <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {currency}{price}
            </p>
            <div className="w-8 h-8 bg-gradient-to-r from-slate-900 to-gray-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-100">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Border Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
      </div>
    </Link>
  );
};

export default ProductItem;
