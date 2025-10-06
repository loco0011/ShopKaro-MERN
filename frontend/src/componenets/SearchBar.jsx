import React, { use, useEffect } from "react";
import { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="relative bg-gradient-to-r from-slate-50/80 via-blue-50/80 to-purple-50/80 backdrop-blur-sm border-y border-white/20 py-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-purple-100/20 to-pink-100/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMGYwZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-800 bg-clip-text text-transparent mb-2">
            Search Our Collection
          </h2>
          <p className="text-gray-600">Find the perfect products for your style</p>
        </div>

        {/* Enhanced Search Box */}
        <div className="relative max-w-2xl mx-auto">
          <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative flex items-center">
              {/* Search Icon */}
              <div className="pl-6 pr-4 py-4">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Search Input */}
              <input
                className="flex-1 py-4 pr-4 bg-transparent outline-none text-gray-800 placeholder-gray-500 text-lg font-medium"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for products, brands, categories..."
                autoFocus
              />

              {/* Clear Button */}
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="px-3 py-2 mx-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}

              {/* Close Search Button */}
              <button
                onClick={() => setShowSearch(false)}
                className="px-4 py-4 text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search Suggestions/Results Counter */}
            {search && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-white/20 overflow-hidden z-50">
                <div className="p-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Search results for "{search}"</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                      {/* This would be filled by filtered products count */}
                      Press Enter to search
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Popular Searches */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-3">Popular searches:</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["T-shirt", "Jacket", "Women", "Men", "Kids", "Winter"].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearch(term)}
                  className="px-3 py-1 bg-white/70 hover:bg-white text-gray-600 hover:text-purple-600 text-sm rounded-full border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-md"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Search Tips */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              Tip: Try searching for specific items, categories, or brands to find exactly what you're looking for
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-8 w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-4 left-8 w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-40 animate-pulse"></div>
    </div>
  ) : null;
};

export default SearchBar;
