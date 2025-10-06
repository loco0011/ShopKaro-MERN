import React from 'react'
import Hero from '../componenets/Hero'
import LatestCollection from '../componenets/LatestCollection'
import BestSeller from '../componenets/BestSeller'
import OurPolicy from '../componenets/OurPolicy'
import NewsletterBox from '../componenets/NewsletterBox'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with enhanced background */}
      <section className="relative">
        <Hero />
      </section>

      {/* Latest Collection Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LatestCollection />
        </div>
      </section>

      {/* Best Seller Section with background variation */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BestSeller />
        </div>
      </section>

      {/* Our Policy Section with enhanced styling */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OurPolicy />
        </div>
      </section>

      {/* Newsletter Section with gradient background */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterBox />
        </div>
      </section>
    </div>
  )
}

export default Home
