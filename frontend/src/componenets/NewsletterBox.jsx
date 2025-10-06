import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16 px-6 rounded-2xl shadow-xl border border-gray-100 my-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Stay in the Loop
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Subscribe to our newsletter for the latest updates, exclusive offers, and fashion insights delivered straight to your inbox.
          </p>
        </div>

        {/* Decorative Element */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gray-300"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-gray-900 to-black rounded-full mx-4"></div>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gray-300"></div>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto"
        >
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="relative z-20 w-full px-8 py-5 border-2 border-gray-200/50 rounded-2xl focus:border-transparent focus:outline-none transition-all duration-500 bg-white/80 backdrop-blur-lg shadow-lg text-gray-800 placeholder-gray-500 focus:shadow-[0_10px_30px_rgba(0,0,0,0.1)] focus:bg-white group-focus-within:scale-[1.02]"
              required
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none"></div>
          </div>
          <div className="relative group">
            <button
              type="submit"
              className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-white px-10 py-5 rounded-2xl font-bold tracking-wider uppercase transition-all duration-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transform hover:-translate-y-2 active:scale-[0.98] cursor-pointer overflow-hidden border border-white/20 backdrop-blur-lg group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl"></div>
              <span className="relative z-10 flex items-center gap-3">
                Subscribe
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:rotate-180 transition-all duration-500">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              </span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
            </button>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl -z-10"></div>
          </div>
        </form>

        {/* Additional Info */}
        <p className="text-sm text-gray-500 mt-6">
          No spam, unsubscribe at any time. Your privacy is important to us.
        </p>
      </div>
    </div>
  );
};

export default NewsletterBox;
