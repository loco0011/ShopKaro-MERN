# API Documentation - Forever Fashion E-commerce

## Overview
This document provides detailed information about the Forever Fashion API endpoints, request/response formats, and authentication mechanisms.

## Base URL
```
Development: http://localhost:5000/api
Production: https://your-domain.com/api
```

## Authentication
The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```http
Authorization: Bearer <your-jwt-token>
```

## Response Format
All API responses follow this standard format:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": { /* response data */ },
  "error": null
}
```

Error responses:
```json
{
  "success": false,
  "message": "Error description",
  "data": null,
  "error": "Detailed error information"
}
```

## Endpoints

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "_id": "user_id",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "token": "jwt_token_here"
  }
}
```

#### Login User
```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "_id": "user_id",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "token": "jwt_token_here"
  }
}
```

### Product Endpoints

#### Get All Products
```http
GET /api/products
```

**Query Parameters:**
- `category` (optional): Filter by category
- `subCategory` (optional): Filter by subcategory
- `sort` (optional): Sort order (price_asc, price_desc, name_asc, name_desc)
- `limit` (optional): Number of products to return
- `page` (optional): Page number for pagination

**Response:**
```json
{
  "success": true,
  "data": {
    "products": [
      {
        "_id": "product_id",
        "name": "Product Name",
        "description": "Product description",
        "price": 99.99,
        "category": "Men",
        "subCategory": "Topwear",
        "sizes": ["S", "M", "L", "XL"],
        "image": ["image1.jpg", "image2.jpg"],
        "bestseller": false,
        "date": "2024-01-01T00:00:00.000Z"
      }
    ],
    "totalProducts": 50,
    "currentPage": 1,
    "totalPages": 5
  }
}
```

#### Get Single Product
```http
GET /api/products/:id
```

**Response:**
```json
{
  "success": true,
  "data": {
    "product": {
      "_id": "product_id",
      "name": "Product Name",
      "description": "Product description",
      "price": 99.99,
      "category": "Men",
      "subCategory": "Topwear",
      "sizes": ["S", "M", "L", "XL"],
      "image": ["image1.jpg", "image2.jpg"],
      "bestseller": false,
      "date": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

#### Create Product (Admin Only)
```http
POST /api/products
```

**Headers:**
```http
Authorization: Bearer <admin_jwt_token>
Content-Type: multipart/form-data
```

**Request Body (Form Data):**
```
name: Product Name
description: Product description
price: 99.99
category: Men
subCategory: Topwear
sizes: ["S", "M", "L", "XL"]
bestseller: false
image1: [file]
image2: [file]
image3: [file]
image4: [file]
```

**Response:**
```json
{
  "success": true,
  "message": "Product added successfully",
  "data": {
    "product": {
      "_id": "new_product_id",
      "name": "Product Name",
      // ... other product fields
    }
  }
}
```

### Cart Endpoints

#### Get User Cart
```http
GET /api/cart
```

**Headers:**
```http
Authorization: Bearer <user_jwt_token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "cartData": {
      "product_id_1": {
        "S": 2,
        "M": 1
      },
      "product_id_2": {
        "L": 1
      }
    }
  }
}
```

#### Add to Cart
```http
POST /api/cart/add
```

**Headers:**
```http
Authorization: Bearer <user_jwt_token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "itemId": "product_id",
  "size": "M"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Item added to cart"
}
```

#### Update Cart
```http
PUT /api/cart/update
```

**Headers:**
```http
Authorization: Bearer <user_jwt_token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "itemId": "product_id",
  "size": "M",
  "quantity": 3
}
```

**Response:**
```json
{
  "success": true,
  "message": "Cart updated successfully"
}
```

### Order Endpoints

#### Place Order
```http
POST /api/orders/place
```

**Headers:**
```http
Authorization: Bearer <user_jwt_token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "address": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipcode": "10001",
    "country": "USA",
    "phone": "1234567890"
  },
  "items": [
    {
      "_id": "product_id",
      "name": "Product Name",
      "price": 99.99,
      "quantity": 2,
      "size": "M",
      "image": ["image1.jpg"]
    }
  ],
  "amount": 199.98
}
```

**Response:**
```json
{
  "success": true,
  "message": "Order placed successfully",
  "data": {
    "order": {
      "_id": "order_id",
      "userId": "user_id",
      "items": [...],
      "amount": 199.98,
      "address": {...},
      "status": "Order Placed",
      "paymentMethod": "COD",
      "payment": false,
      "date": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

#### Get User Orders
```http
GET /api/orders/userorders
```

**Headers:**
```http
Authorization: Bearer <user_jwt_token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "orders": [
      {
        "_id": "order_id",
        "userId": "user_id",
        "items": [...],
        "amount": 199.98,
        "address": {...},
        "status": "Order Placed",
        "paymentMethod": "COD",
        "payment": false,
        "date": "2024-01-01T00:00:00.000Z"
      }
    ]
  }
}
```

#### Get All Orders (Admin Only)
```http
GET /api/orders/list
```

**Headers:**
```http
Authorization: Bearer <admin_jwt_token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "orders": [
      {
        "_id": "order_id",
        "userId": {
          "_id": "user_id",
          "name": "John Doe",
          "email": "john@example.com"
        },
        "items": [...],
        "amount": 199.98,
        "address": {...},
        "status": "Order Placed",
        "paymentMethod": "COD",
        "payment": false,
        "date": "2024-01-01T00:00:00.000Z"
      }
    ]
  }
}
```

#### Update Order Status (Admin Only)
```http
POST /api/orders/status
```

**Headers:**
```http
Authorization: Bearer <admin_jwt_token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "orderId": "order_id",
  "status": "Shipped"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Order status updated"
}
```

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 500 | Internal Server Error |

## Rate Limiting
- **General APIs**: 100 requests per minute per IP
- **Authentication**: 5 login attempts per minute per IP
- **Admin APIs**: 200 requests per minute per token

## Data Validation

### Product Validation
```javascript
{
  name: { required: true, minLength: 2, maxLength: 100 },
  description: { required: true, minLength: 10, maxLength: 1000 },
  price: { required: true, min: 0.01, type: Number },
  category: { required: true, enum: ['Men', 'Women', 'Kids'] },
  subCategory: { required: true, enum: ['Topwear', 'Bottomwear', 'Accessories'] },
  sizes: { required: true, type: Array },
  image: { required: true, type: Array, minLength: 1 }
}
```

### User Validation
```javascript
{
  name: { required: true, minLength: 2, maxLength: 50 },
  email: { required: true, type: 'email', unique: true },
  password: { required: true, minLength: 6, maxLength: 100 }
}
```

## Example Usage

### JavaScript/Fetch
```javascript
// Login user
const login = async (email, password) => {
  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (data.success) {
    localStorage.setItem('token', data.data.token);
    return data.data.user;
  } else {
    throw new Error(data.message);
  }
};

// Get products with authentication
const getProducts = async () => {
  const token = localStorage.getItem('token');

  const response = await fetch('http://localhost:5000/api/products', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data.data.products;
};
```

### Axios
```javascript
import axios from 'axios';

// Set default base URL
axios.defaults.baseURL = 'http://localhost:5000/api';

// Add auth token to requests
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add to cart
const addToCart = async (itemId, size) => {
  try {
    const response = await axios.post('/cart/add', { itemId, size });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
```

## WebSocket Events (Future Implementation)

### Real-time Order Updates
```javascript
// Client side
socket.on('orderStatusUpdate', (data) => {
  console.log(`Order ${data.orderId} status: ${data.status}`);
});

// Server side
io.to(userId).emit('orderStatusUpdate', {
  orderId: order._id,
  status: newStatus
});
```

## Testing Examples

### Postman Collection
```json
{
  "info": {
    "name": "Forever Fashion API",
    "description": "API collection for testing"
  },
  "item": [
    {
      "name": "Authentication",
      "item": [
        {
          "name": "Register",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"name\": \"Test User\",\n  \"email\": \"test@example.com\",\n  \"password\": \"password123\"\n}"
            },
            "url": {
              "raw": "{{baseUrl}}/auth/register",
              "host": ["{{baseUrl}}"],
              "path": ["auth", "register"]
            }
          }
        }
      ]
    }
  ]
}
```

This API documentation provides comprehensive information for integrating with the Forever Fashion e-commerce platform. For additional support, please refer to the main README.md file or contact the development team.