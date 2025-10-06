import React from 'react'
import { ShopContext } from "../context/ShopContext";
import Title from '../componenets/Title';
import { products } from '../assets/frontend_assets/assets';
import { use } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const Orders = () => {

  const {backend_url, token, currency} = React.useContext(ShopContext);
  const [orderData, setOrderData] = React.useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return;
      }

      const response = await axios.post(`${backend_url}/api/order/userorders`, {}, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      });

      if (response.data && response.data.success) {
        setOrderData(response.data.orders || []);
      } else {
        console.error("Failed to load orders:", response.data?.message);
        setOrderData([]);
      }
    } catch (error) {
      console.error("Error loading order data:", error);
      setOrderData([]); // Set empty array on error to prevent crashes
    }
  };

  useEffect(() => {
    if (token) {
      loadOrderData();
    }
  }, [token]);

  return (
    <div className='border-t pt-16 min-h-screen bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-8'>
          <Title text1={"MY"} text2={"ORDERS"} />
          <p className='text-gray-600 mt-2'>Track and manage your order history</p>
        </div>

        <div className='space-y-6'>
          {orderData.length === 0 ? (
            <div className='text-center py-16 bg-white rounded-lg shadow-sm'>
              <div className='w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center'>
                <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
                </svg>
              </div>
              <h3 className='text-lg font-medium text-gray-900 mb-2'>No orders yet</h3>
              <p className='text-gray-500 mb-6'>When you place your first order, it will appear here</p>
              <button
                onClick={() => window.location.href = '/collection'}
                className='bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors'
              >
                Start Shopping
              </button>
            </div>
          ) : (
            orderData.map((order, orderIndex) => (
              <div key={orderIndex} className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'>
                {/* Order Header */}
                <div className='bg-gray-50 px-6 py-4 border-b border-gray-200'>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                    <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                      <div>
                        <p className='text-sm font-medium text-gray-900'>
                          Order #{order._id?.slice(-8) || 'N/A'}
                        </p>
                        <p className='text-sm text-gray-500'>
                          Placed on {new Date(order.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <div className='flex items-center'>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          order.orderStatus === 'Delivered' ? 'bg-green-100 text-green-800' :
                          order.orderStatus === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                          order.orderStatus === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          <div className={`w-2 h-2 rounded-full mr-1 ${
                            order.orderStatus === 'Delivered' ? 'bg-green-400' :
                            order.orderStatus === 'Shipped' ? 'bg-blue-400' :
                            order.orderStatus === 'Processing' ? 'bg-yellow-400' :
                            'bg-gray-400'
                          }`}></div>
                          {order.orderStatus || 'Processing'}
                        </span>
                      </div>
                    </div>
                    <div className='mt-4 sm:mt-0 text-right'>
                      <p className='text-lg font-semibold text-gray-900'>
                        {currency}{order.totalAmount || 0}
                      </p>
                      <p className='text-sm text-gray-500'>
                        {order.items?.length || 0} item{(order.items?.length || 0) !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className='divide-y divide-gray-200'>
                  {order.items && order.items.map((item, itemIndex) => (
                    <div key={itemIndex} className='p-6'>
                      <div className='flex items-start space-x-4'>
                        <div className='flex-shrink-0'>
                          <img
                            className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border border-gray-200'
                            src={item.image || '/placeholder-image.jpg'}
                            alt={item.name || 'Product'}
                          />
                        </div>
                        <div className='flex-1 min-w-0'>
                          <div className='flex flex-col sm:flex-row sm:justify-between'>
                            <div className='flex-1'>
                              <h4 className='text-lg font-medium text-gray-900 truncate'>
                                {item.name || 'Product Name'}
                              </h4>
                              <div className='mt-2 flex flex-wrap gap-4 text-sm text-gray-600'>
                                <span className='inline-flex items-center'>
                                  <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                                    <path d='M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z'/>
                                  </svg>
                                  Size: {item.size || 'N/A'}
                                </span>
                                <span className='inline-flex items-center'>
                                  <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd'/>
                                  </svg>
                                  Qty: {item.quantity || 1}
                                </span>
                              </div>
                            </div>
                            <div className='mt-2 sm:mt-0 sm:text-right'>
                              <p className='text-lg font-semibold text-gray-900'>
                                {currency}{item.price || 0}
                              </p>
                              {item.quantity > 1 && (
                                <p className='text-sm text-gray-500'>
                                  {currency}{(item.price || 0)} each
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Actions */}
                <div className='bg-gray-50 px-6 py-4 flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center'>
                  <div className='flex gap-3'>
                    <button className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors'>
                      <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                      </svg>
                      View Details
                    </button>
                    <button className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors'>
                      <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                      Track Order
                    </button>
                  </div>
                  {order.orderStatus === 'Delivered' && (
                    <button className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors'>
                      <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5H14.5M17 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2' />
                      </svg>
                      Buy Again
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Orders
