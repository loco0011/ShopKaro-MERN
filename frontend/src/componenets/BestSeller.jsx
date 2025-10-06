import React from "react";
import ProductItem from "./ProductItem";
import Title from "./Title";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller === true);
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="mb-6">
          <Title text1={"BEST"} text2={"SELLERS"} />
        </div>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
          Explore our best-selling products, loved by customers for their
          quality and style. Shop now to find your new favorites!
        </p>

        {/* Decorative Line */}
        <div className="flex items-center justify-center mt-8">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gray-300"></div>
          <div className="w-2 h-2 bg-gray-900 rounded-full mx-4"></div>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gray-300"></div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="relative py-8">
        {/* Modern Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-gray-50/50 rounded-3xl"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        {/* Products */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10 p-8">
          {bestSeller.map((item, index) => (
            <div
              key={index}
              className="transform transition-all duration-700 hover:z-10 relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProductItem
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
