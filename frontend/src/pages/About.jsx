import React from "react";
import Title from "../componenets/Title";
import { assets } from "../assets/frontend_assets/assets";
import Newsletter from "../componenets/NewsletterBox";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50/50 via-white to-slate-50/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            About ShopKaro
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional fashion experiences with passion, quality, and innovation.
            Discover the story behind our commitment to style and excellence.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-52 h-52 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* About Story Section */}
        <div className="relative mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 overflow-hidden">
                <img
                  src={assets.about_img}
                  alt="About ShopKaro Fashion"
                  className="w-full h-[500px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Floating Badge */}
                <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-bold text-gray-800">Est. 2024</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div className="relative">
                <Title text1={"OUR"} text2={"STORY"} />
              </div>

              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Born from a passion for exceptional fashion and a vision to revolutionize the way people express their style,
                    ShopKaro represents the perfect fusion of contemporary design and timeless elegance.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our journey began with a simple belief: that everyone deserves access to premium quality fashion that not only
                    looks extraordinary but also feels exceptional. We curate every piece with meticulous attention to detail,
                    ensuring that our customers receive nothing but the finest.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-gray-50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                    Our Mission
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To empower individuals through fashion that celebrates their unique personality while maintaining the highest
                    standards of quality, sustainability, and ethical production. We believe that great style should be accessible,
                    sustainable, and transformative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="relative mb-24">
          <div className="text-center mb-16">
            <Title text1={"WHY"} text2={"CHOOSE US"} />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
              Discover what sets us apart in the world of premium fashion and exceptional customer experience.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Quality Assurance */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-10 border border-white/30 shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Every product undergoes rigorous quality testing to ensure it meets our exceptional standards.
                  We partner with the finest manufacturers and use premium materials.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  Premium Materials Only
                </div>
              </div>
            </div>

            {/* Convenience */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-10 border border-white/30 shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Convenience</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Seamless shopping experience with fast delivery, easy returns, and multiple payment options.
                  Shop anytime, anywhere with our user-friendly platform.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-purple-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  24/7 Shopping Experience
                </div>
              </div>
            </div>

            {/* Customer Service */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-orange-600/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-10 border border-white/30 shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Exceptional Service</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our dedicated support team is always ready to assist you with personalized service,
                  styling advice, and prompt resolution of any concerns.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-pink-600">
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                  Personal Style Consultations
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative mb-24">
          <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 rounded-3xl p-12 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  50K+
                </div>
                <p className="text-gray-300 font-medium">Happy Customers</p>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  1000+
                </div>
                <p className="text-gray-300 font-medium">Premium Products</p>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  99%
                </div>
                <p className="text-gray-300 font-medium">Satisfaction Rate</p>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <p className="text-gray-300 font-medium">Support Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="relative mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sustainability</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Committed to ethical manufacturing and eco-friendly practices that protect our planet for future generations.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Innovation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Constantly evolving our designs and technology to bring you the latest trends and cutting-edge fashion solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-slate-50/50 via-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default About;
