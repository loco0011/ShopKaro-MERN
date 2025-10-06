import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const OurPolicy = () => {
  const policies = [
    {
      icon: assets.exchange_icon,
      title: "Easy Exchange Policy",
      description: "30 days easy exchange policy on all products.",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      icon: assets.quality_icon,
      title: "Quality Assurance",
      description: "We ensure the best quality for all our products.",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      icon: assets.support_img,
      title: "Customer Support",
      description: "Our team is here to help you 24/7 with any inquiries.",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
  ];

  return (
    <div className="py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We're committed to providing you with the best shopping experience through our core values
        </p>
      </div>

      {/* Policies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {policies.map((policy, index) => (
          <div
            key={index}
            className={`${policy.bgColor} rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
          >
            {/* Icon Container */}
            <div className={`${policy.iconBg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <img
                src={policy.icon}
                alt={policy.title}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Content */}
            <h3 className="font-bold text-xl text-gray-900 mb-4">
              {policy.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {policy.description}
            </p>

            {/* Decorative Element */}
            <div className="mt-6 flex justify-center">
              <div className="w-12 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="group">
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            10k+
          </div>
          <p className="text-gray-600 font-medium">Happy Customers</p>
        </div>
        <div className="group">
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
            99%
          </div>
          <p className="text-gray-600 font-medium">Satisfaction Rate</p>
        </div>
        <div className="group">
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
            24/7
          </div>
          <p className="text-gray-600 font-medium">Support Available</p>
        </div>
        <div className="group">
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
            500+
          </div>
          <p className="text-gray-600 font-medium">Products</p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
