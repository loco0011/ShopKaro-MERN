import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <div className="mb-8">
              {/* Premium Footer Logo */}
              <div className="relative inline-block group">
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/30 group-hover:shadow-3xl transition-all duration-500">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="relative flex items-center gap-4">
                    {/* Large Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col">
                      <h2 className="text-4xl font-black bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-800 bg-clip-text text-transparent leading-none tracking-tight">
                        Shop<span className="text-purple-600">Karo</span>
                      </h2>
                      <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider leading-none mt-1">Premium Fashion Store</span>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-3 right-4 w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute bottom-3 left-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 right-2 w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            </div>
            <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-gray-800 mb-3'>Your Style, Our Passion</h3>
                <p className='w-full md:w-2/3 text-gray-600 leading-relaxed'>
                    Discover the perfect blend of contemporary fashion and timeless elegance. We curate premium collections that celebrate individual style and exceptional quality.
                </p>
                <p className='w-full md:w-2/3 text-gray-600 leading-relaxed'>
                    From everyday essentials to statement pieces, our mission is to empower you with fashion that tells your unique story.
                </p>
                <div className='flex items-center gap-4 mt-6'>
                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                        <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                        <span>Premium Quality Guaranteed</span>
                    </div>
                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                        <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
                        <span>Free Worldwide Shipping</span>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Email: support@example.com</li>
                <li>Phone: +1234567890</li>
            </ul>
        </div>
      </div>
      <div className='border-t border-gray-200 mt-10'>
        <div className='flex flex-col sm:flex-row justify-between items-center py-6'>
            <p className='text-sm text-gray-600'>&copy; 2025 ShopKaro. All rights reserved.</p>
            <div className='flex items-center gap-6 mt-4 sm:mt-0'>
                <span className='text-sm text-gray-600'>Follow us:</span>
                <div className='flex items-center gap-4'>
                    <div className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer'>
                        <span className='text-xs font-semibold text-gray-600'>f</span>
                    </div>
                    <div className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer'>
                        <span className='text-xs font-semibold text-gray-600'>ig</span>
                    </div>
                    <div className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer'>
                        <span className='text-xs font-semibold text-gray-600'>tw</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
