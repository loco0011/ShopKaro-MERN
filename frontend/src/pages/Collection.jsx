import React, { use, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import ProductItem from "../componenets/ProductItem";
import Title from "../componenets/Title";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = React.useState(false);
  const [filterProducts, setFilterProducts] = React.useState(products);
  const [category, setCategory] = React.useState([]);
  const [subCategory, setSubCategory] = React.useState([]);
  const [sortType, setSortType] = React.useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProducts = (sortType) => {
    let filteredProductsCopy = filterProducts.slice();

    switch (sortType) {
      case "relevant":
        setFilterProducts(filteredProductsCopy);
        break;
      case "low-to-high":
        filteredProductsCopy.sort((a, b) => a.price - b.price);
        setFilterProducts(filteredProductsCopy);
        break;
      case "high-to-low":
        filteredProductsCopy.sort((a, b) => b.price - a.price);
        setFilterProducts(filteredProductsCopy);
        break;
      default:
        setFilterProducts(filteredProductsCopy);
    }
  };

  useEffect(() => {
    sortProducts(sortType);
  }, [sortType]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50/50 via-white to-slate-50/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-white py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Our Collection
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our curated selection of premium fashion pieces designed for every style and occasion
          </p>
          <div className="mt-8 flex items-center justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar Filters */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-8">
              {/* Filter Header */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl border border-white/30 shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden">
                  <div
                    onClick={() => setShowFilter(!showFilter)}
                    className="flex items-center justify-between p-8 cursor-pointer hover:bg-white/50 transition-all duration-500 group/header"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-4">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-r from-slate-900 to-gray-800 rounded-xl flex items-center justify-center group-hover/header:shadow-lg transition-all duration-300">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
                          </svg>
                        </div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                      </div>
                      <span className="group-hover/header:text-gray-700 transition-colors duration-300">Filters</span>
                    </h2>
                    <div className="relative">
                      <svg
                        className={`w-6 h-6 text-gray-500 transition-all duration-500 lg:hidden ${
                          showFilter ? "rotate-180 scale-110" : "hover:scale-110"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Filter Content */}
                  <div className={`${showFilter ? "block" : "hidden"} lg:block transition-all duration-500`}>
                    {/* Category Filter */}
                    <div className="border-t border-white/20 p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                        Category
                      </h3>
                      <div className="space-y-4">
                        {["Men", "Women", "Kids"].map((cat) => (
                          <label key={cat} className="flex items-center gap-4 cursor-pointer group/item">
                            <div className="relative">
                              <input
                                type="checkbox"
                                value={cat}
                                onChange={toggleCategory}
                                className="sr-only"
                              />
                              <div className={`w-6 h-6 rounded-xl border-2 transition-all duration-500 transform group-hover/item:scale-110 ${
                                category.includes(cat)
                                  ? 'bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 border-gray-900 shadow-lg'
                                  : 'border-gray-300 group-hover/item:border-gray-500 bg-white/80 backdrop-blur-sm'
                              }`}>
                                {category.includes(cat) && (
                                  <svg className="w-4 h-4 text-white absolute top-0.5 left-0.5 animate-in zoom-in duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                              {category.includes(cat) && (
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping"></div>
                              )}
                            </div>
                            <span className="text-gray-700 font-semibold text-lg group-hover/item:text-gray-900 transition-colors duration-300">
                              {cat}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Type Filter */}
                    <div className="border-t border-white/20 p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                        Type
                      </h3>
                      <div className="space-y-4">
                        {["Topwear", "Bottomwear", "Accessories"].map((type) => (
                          <label key={type} className="flex items-center gap-4 cursor-pointer group/item">
                            <div className="relative">
                              <input
                                type="checkbox"
                                value={type}
                                onChange={toggleSubCategory}
                                className="sr-only"
                              />
                              <div className={`w-6 h-6 rounded-xl border-2 transition-all duration-500 transform group-hover/item:scale-110 ${
                                subCategory.includes(type)
                                  ? 'bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 border-gray-900 shadow-lg'
                                  : 'border-gray-300 group-hover/item:border-gray-500 bg-white/80 backdrop-blur-sm'
                              }`}>
                                {subCategory.includes(type) && (
                                  <svg className="w-4 h-4 text-white absolute top-0.5 left-0.5 animate-in zoom-in duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                              {subCategory.includes(type) && (
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping"></div>
                              )}
                            </div>
                            <span className="text-gray-700 font-semibold text-lg group-hover/item:text-gray-900 transition-colors duration-300">
                              {type}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Clear Filters */}
                    {(category.length > 0 || subCategory.length > 0) && (
                      <div className="border-t border-white/20 p-8">
                        <button
                          onClick={() => {
                            setCategory([]);
                            setSubCategory([]);
                          }}
                          className="group relative w-full bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-white py-4 px-6 rounded-2xl font-bold text-base tracking-wide transition-all duration-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transform hover:-translate-y-1 active:scale-[0.98] overflow-hidden border border-white/10"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-orange-600/30 to-yellow-600/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Clear All Filters
                            <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4l16 16m0-16L4 20" />
                            </svg>
                          </span>
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-red-400 to-orange-500 rounded-full animate-pulse"></div>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Header with Title and Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
              <div className="flex items-center gap-6">
                <Title text1={"ALL"} text2={"COLLECTIONS"} />
              </div>

              {/* Sort Dropdown */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                <select
                  className="relative bg-white/90 backdrop-blur-lg border border-white/30 rounded-2xl px-8 py-4 font-bold text-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500/30 cursor-pointer transform hover:scale-105 hover:-translate-y-1"
                  onChange={(e) => setSortType(e.target.value)}
                  value={sortType}
                >
                  <option value="relevant">Sort by: Relevant</option>
                  <option value="low-to-high">Sort by: Price Low to High</option>
                  <option value="high-to-low">Sort by: Price High to Low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="relative py-8">
              {/* Modern Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-gray-50/50 rounded-3xl"></div>
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
              </div>

              {filterProducts.length > 0 ? (
                <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10 p-8">
                  {filterProducts.map((item, index) => (
                    <div
                      key={index}
                      className="transform transition-all duration-700 hover:z-10 relative"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <ProductItem
                        name={item.name}
                        id={item._id}
                        price={item.price}
                        image={item.image}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative text-center py-20">
                  <div className="relative group max-w-lg mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                    <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-16 border border-white/30 shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                      <div className="w-20 h-20 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                        <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">No Products Found</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Try adjusting your filters or search terms to find what you're looking for.
                      </p>
                      <div className="mt-8 flex items-center justify-center">
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
