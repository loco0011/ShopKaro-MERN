import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-4 items-center mb-8 group">
      <div className="relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">
          <span className="text-gray-600 group-hover:text-gray-500 transition-colors duration-500">{text1}</span>{" "}
          <span className="text-gray-900 font-bold bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-700">{text2}</span>
        </h2>
        <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 group-hover:w-full transition-all duration-700 rounded-full"></div>
      </div>
      <div className="relative">
        <div className="w-16 sm:w-20 h-[3px] bg-gradient-to-r from-gray-900 via-slate-700 to-gray-600 group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-700 rounded-full"></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default Title;
