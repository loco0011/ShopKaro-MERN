import { ShopContext } from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products, navigate } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  const handleViewAllProducts = () => {
    navigate('/collection');
  };

  return (
    <div className="py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="mb-6">
          <Title text1={"LATEST"} text2={"COLLECTION"} />
        </div>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
          Discover our latest arrivals and stay ahead of the trends. Shop now to
          refresh your wardrobe with the season's must-have styles.
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
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        </div>

        {/* Products */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10 p-8">
          {latestProducts.map((item, index) => (
            <div
              key={index}
              className="transform transition-all duration-700 hover:z-10 relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductItem
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </div>        {/* View All Button */}
        <div className="text-center mt-16">
          <div className="relative inline-block group">
            <button
              onClick={handleViewAllProducts}
              className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-white px-12 py-6 font-bold text-lg tracking-wider uppercase transition-all duration-700 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)] transform hover:-translate-y-3 active:scale-[0.97] cursor-pointer overflow-hidden rounded-2xl border border-white/20 backdrop-blur-lg group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 transform rotate-180 scale-x-0 group-hover:scale-x-100 group-hover:rotate-0 transition-all duration-700 origin-center"></div>
              <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl"></div>
              <span className="relative z-10 flex items-center gap-4">
                <span className="group-hover:text-white transition-colors duration-300">View All Products</span>
                <div className="relative">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:rotate-45 transition-all duration-500">
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping"></div>
                </div>
              </span>
            </button>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;