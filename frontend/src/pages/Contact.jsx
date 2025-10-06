import React, { useState } from "react";
import Title from "../componenets/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../componenets/NewsletterBox";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50/50 via-white to-slate-50/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
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

        {/* Contact Information & Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative">
              <Title text1={"CONTACT"} text2={"INFORMATION"} />
            </div>

            {/* Store Information Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h-2m0 0V9a2 2 0 012-2h2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10m-10 4h10m-10 4h7m-7 4h7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Store</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">ShopKaro Fashion Plaza, 123 Style Avenue, Fashion District, NY 10001</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">hello@ShopKaroFashion.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Careers Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H6a2 2 0 00-2-2V4m16 4.5l-3.5-3.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Join Our Team</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Be part of our growing team and help us create exceptional fashion experiences.
                  We're always looking for passionate individuals who share our vision.
                </p>
                <button className="group relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-white px-8 py-4 rounded-2xl font-bold text-base tracking-wide transition-all duration-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transform hover:-translate-y-1 active:scale-[0.98] overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-orange-600/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Careers
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-xl">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h3>
                  <p className="text-gray-600">We'd love to hear from you. Fill out the form below and we'll get back to you shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 border-2 border-gray-200/50 rounded-xl focus:border-transparent focus:outline-none transition-all duration-500 bg-white/80 backdrop-blur-lg shadow-sm text-gray-800 placeholder-gray-500 focus:shadow-[0_10px_30px_rgba(0,0,0,0.1)] focus:bg-white group-focus-within:scale-[1.02]"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 border-2 border-gray-200/50 rounded-xl focus:border-transparent focus:outline-none transition-all duration-500 bg-white/80 backdrop-blur-lg shadow-sm text-gray-800 placeholder-gray-500 focus:shadow-[0_10px_30px_rgba(0,0,0,0.1)] focus:bg-white group-focus-within:scale-[1.02]"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-gray-200/50 rounded-xl focus:border-transparent focus:outline-none transition-all duration-500 bg-white/80 backdrop-blur-lg shadow-sm text-gray-800 placeholder-gray-500 focus:shadow-[0_10px_30px_rgba(0,0,0,0.1)] focus:bg-white group-focus-within:scale-[1.02]"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-gray-200/50 rounded-xl focus:border-transparent focus:outline-none transition-all duration-500 bg-white/80 backdrop-blur-lg shadow-sm text-gray-800 placeholder-gray-500 focus:shadow-[0_10px_30px_rgba(0,0,0,0.1)] focus:bg-white group-focus-within:scale-[1.02] resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-white py-6 px-8 rounded-2xl font-bold text-lg tracking-wide transition-all duration-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transform hover:-translate-y-1 active:scale-[0.98] overflow-hidden border border-white/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Send Message
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="relative mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Live Chat */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant support from our team</p>
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available 24/7
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-lime-600/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-lime-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Message us directly</p>
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  +1 (555) 123-4567
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 2h10a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media</h3>
                <p className="text-gray-600 mb-4">Follow us for updates</p>
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-blue-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  @ShopKaroFashion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-slate-50/50 via-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <NewsletterBox />
        </div>
      </div>
    </div>
  );
};

export default Contact;
