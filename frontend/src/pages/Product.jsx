import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../componenets/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');

  // Fetch product data based on productId
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  // Scroll to top when component mounts or productId changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [productId]);

  return productData ? (
    <div className="bg-gradient-to-br from-gray-50/50 via-white to-slate-50/50 pt-6">
      {/* Main Product Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Product Images Section */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative mb-4 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-white/20 overflow-hidden">
                <img
                  className="w-full h-[350px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  src={image}
                  alt={productData.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {productData.image.map((item, index) => (
                <div key={index} className="relative group flex-shrink-0">
                  <img
                    onClick={() => setImage(item)}
                    className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                      item === image
                        ? 'ring-3 ring-blue-500 ring-offset-1 shadow-lg scale-105'
                        : 'hover:scale-110 hover:shadow-md opacity-70 hover:opacity-100'
                    }`}
                    src={item}
                    alt={`Product view ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            {/* Product Title & Rating */}
            <div className="space-y-3">
              <h1 className="text-2xl mt-4 lg:text-3xl font-bold text-gray-900 leading-tight">
                {productData.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">(222 reviews)</span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-green-600 font-medium">In Stock</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="relative">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {currency}{productData.price}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-base text-gray-500 line-through">{currency}{(productData.price * 1.2).toFixed(0)}</span>
                <span className="bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded-full">20% OFF</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-gray-600 leading-relaxed text-sm">
                {productData.description}
              </p>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Select Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`relative py-3 px-2 rounded-lg text-center font-medium transition-all duration-300 ${
                      item === size
                        ? 'bg-black text-white shadow-lg scale-105'
                        : 'bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-white hover:shadow-md hover:scale-105'
                    }`}
                  >
                    {item}
                    {item === size && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-3">
              <button
                onClick={() => addToCart(productData._id, size)}
                className="group relative w-full bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-white py-4 px-6 rounded-xl font-bold text-base tracking-wide transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transform hover:-translate-y-1 active:scale-[0.98] overflow-hidden border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Add to Cart
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l1.5 1.5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                  </svg>
                </span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              </button>

              {/* Product Features */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">100% Original Product</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">Cash on Delivery Available</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">Easy Return & Exchange within 30 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden shadow-xl">
            {/* Tab Headers */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-6 py-3 font-semibold transition-all duration-300 ${
                  activeTab === 'description'
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-6 py-3 font-semibold transition-all duration-300 ${
                  activeTab === 'reviews'
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Reviews (99)
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'description' ? (
                <div className="space-y-3 text-gray-600 leading-relaxed text-sm">
                  <p>Experience premium quality and contemporary style with this exceptional piece from our curated collection. Crafted with attention to detail and designed for the modern lifestyle.</p>
                  <p>Made from high-quality materials and featuring expert craftsmanship, this item is built to last while maintaining its elegant appearance.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold">A</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">Alex Johnson</h4>
                          <div className="flex text-yellow-400 text-sm">★★★★★</div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">"Excellent quality and perfect fit! Highly recommend this product."</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold">S</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">Sarah Miller</h4>
                          <div className="flex text-yellow-400 text-sm">★★★★★</div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">"Amazing product! Fast shipping and exactly as described."</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-gradient-to-br from-slate-50/50 via-white to-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Product;
