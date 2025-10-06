import React from 'react'
import { useContext } from 'react'
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from '../context/ShopContext';

const Hero = () => {
  const { navigate } = useContext(ShopContext);

  const handleShopNow = () => {
    navigate('/collection');
    // Scroll to top of the page after navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]'>
        {/* Hero left Section */}
        <div className='w-full lg:w-1/2 flex items-center justify-center py-12 lg:py-20 px-4 sm:px-6 lg:px-8'>
          <div className='text-center lg:text-left max-w-lg'>
            {/* Badge */}
            <div className='inline-flex items-center gap-3 mb-6'>
              <div className='w-12 md:w-16 h-[2px] bg-black'></div>
              <span className='font-medium text-sm md:text-base tracking-wider text-gray-700 uppercase'>
                Our Bestsellers
              </span>
            </div>

            {/* Main Heading */}
            <h1 className='prata-regular text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-gray-900 mb-6'>
              Latest
              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600'>
                Arrivals
              </span>
            </h1>

            {/* Subtitle */}
            <p className='text-gray-600 text-lg md:text-xl mb-8 leading-relaxed'>
              Discover fashion that speaks to your style. Curated collections for the modern trendsetter.
            </p>

            {/* CTA Button */}
            <div className='relative inline-block'>
              <button
                onClick={handleShopNow}
                className='group relative overflow-hidden bg-black text-white px-12 py-6 text-lg font-semibold tracking-wide transition-all duration-500 hover:bg-gray-900 hover:scale-105 hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)] active:scale-95 rounded-full border-2 border-transparent hover:border-gray-300 cursor-pointer'
              >
                {/* Background Animation */}
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full'></div>

                {/* Shimmer Effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full'></div>

                {/* Button Content */}
                <span className='relative z-10 flex items-center gap-4'>
                  <span className='group-hover:text-white transition-colors duration-300'>SHOP NOW</span>

                  {/* Animated Arrow */}
                  <div className='relative overflow-hidden'>
                    <svg className='w-6 h-6 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                    </svg>

                    {/* Arrow Trail Effect */}
                    <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <svg className='w-6 h-6 transform translate-x-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                      </svg>
                    </div>
                  </div>
                </span>

                {/* Pulse Effect */}
                <div className='absolute -inset-1 bg-black opacity-30 rounded-full animate-ping group-hover:animate-none'></div>
              </button>

              {/* Floating Particles */}
              <div className='absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200'></div>
              <div className='absolute -bottom-2 -left-2 w-2 h-2 bg-purple-500 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300'></div>
            </div>
          </div>
        </div>

        {/* Hero right Section */}
        <div className='w-full lg:w-1/2 relative'>
          <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden'></div>
          <img
            className='w-full h-[400px] lg:h-full object-cover'
            src={assets.hero_img}
            alt="Fashion Collection"
          />

          {/* Floating Elements */}
          <div className='absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hidden lg:block'>
            <div className='text-center'>
              <p className='text-2xl font-bold text-gray-900'>50+</p>
              <p className='text-xs text-gray-600 uppercase tracking-wide'>New Arrivals</p>
            </div>
          </div>

          <div className='absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg hidden lg:block'>
            <div className='flex items-center gap-3'>
              <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
              <p className='text-sm text-gray-700 font-medium'>Free Shipping Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className='absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-50 blur-3xl'></div>
      <div className='absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-30 blur-3xl'></div>
    </div>
  )
}

export default Hero
