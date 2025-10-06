# 🚀 ShopKaro E-commerce Platform - Getting Started Guide

A complete premium e-commerce platform built with the MERN stack featuring a modern glassmorphism design, comprehensive admin panel, and robust backend API.

## 📋 Table of Contents

1. [Project Overview](#-project-overview)
2. [Prerequisites](#-prerequisites)
3. [Quick Start](#-quick-start)
4. [Detailed Setup](#-detailed-setup)
5. [Running the Project](#-running-the-project)
6. [Project Structure](#-project-structure)
7. [Features](#-features)
8. [Troubleshooting](#-troubleshooting)
9. [Deployment](#-deployment)

## 🎯 Project Overview

**ShopKaro** is a full-stack e-commerce platform with:
- **Frontend**: React with Vite, Tailwind CSS, Premium UI/UX
- **Backend**: Node.js, Express.js, MongoDB, JWT Authentication
- **Admin Panel**: React-based admin dashboard
- **Features**: Cart management, Order processing, Image uploads, User authentication

## ⚡ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://cloud.mongodb.com)
- **Git** - [Download](https://git-scm.com/)
- **Code Editor** - [VS Code](https://code.visualstudio.com/) (recommended)

### Check Installation:
```bash
node --version    # Should be v16 or higher
npm --version     # Should be v8 or higher
git --version     # Any recent version
```

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/loco0011/ShopKaro-MERN.git
cd ShopKaro-MERN
```

### 2. Install Dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Install admin dependencies
cd ../admin
npm install
```

### 3. Environment Setup
```bash
# Backend environment
cd ../backend
cp example.env .env
# Edit .env file with your configurations

# Frontend environment
cd ../frontend
cp example.env .env
# Edit .env file with your configurations

# Admin environment
cd ../admin
cp example.env .env
# Edit .env file with your configurations
```

### 4. Run the Project
```bash
# Terminal 1 - Backend Server
cd backend
npm run server

# Terminal 2 - Frontend Application
cd frontend
npm run dev

# Terminal 3 - Admin Panel
cd admin
npm run dev
```

### 5. Access the Applications
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:4000
- **Admin Panel**: http://localhost:5174

## 🔧 Detailed Setup

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment configuration:**
   ```bash
   cp example.env .env
   ```

4. **Edit `.env` file with required values:**
   ```env
   # Required configurations
   MONGODB_URI=mongodb://localhost:27017/shopkaro
   JWT_SECRET=your_super_secret_jwt_key_here
   ADMIN_EMAIL=admin@shopkaro.com
   ADMIN_PASSWORD=admin123456

   # Cloudinary (for image uploads)
   CLOUDINARY_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

   # Server configuration
   PORT=4000
   ```

5. **Start the backend server:**
   ```bash
   # Development mode
   npm run server

   # Production mode
   npm start
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment configuration:**
   ```bash
   cp example.env .env
   ```

4. **Edit `.env` file:**
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   VITE_APP_NAME=ShopKaro
   ```

5. **Start the frontend application:**
   ```bash
   # Development mode
   npm run dev

   # Build for production
   npm run build
   ```

### Admin Panel Setup

1. **Navigate to admin directory:**
   ```bash
   cd admin
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment configuration:**
   ```bash
   cp example.env .env
   ```

4. **Edit `.env` file:**
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   VITE_ADMIN_APP_NAME=ShopKaro Admin
   ```

5. **Start the admin panel:**
   ```bash
   # Development mode
   npm run dev

   # Build for production
   npm run build
   ```

## 🏃‍♂️ Running the Project

### Option 1: Manual Start (Recommended for Development)

Open **3 separate terminals** and run:

```bash
# Terminal 1 - Backend
cd backend
npm run server
```

```bash
# Terminal 2 - Frontend
cd frontend
npm run dev
```

```bash
# Terminal 3 - Admin
cd admin
npm run dev
```

### Option 2: Using NPM Scripts (if configured)

If you have concurrent scripts set up in the root package.json:

```bash
# Start all services
npm run dev

# Start specific services
npm run server:backend
npm run dev:frontend
npm run dev:admin
```

### Expected Output:

**Backend (Terminal 1):**
```
Server running on port 4000
MongoDB connected successfully
```

**Frontend (Terminal 2):**
```
Local:   http://localhost:5173/
Network: use --host to expose
```

**Admin (Terminal 3):**
```
Local:   http://localhost:5174/
Network: use --host to expose
```

## 📁 Project Structure

```
ShopKaro-MERN/
├── 📁 backend/                 # Backend API Server
│   ├── 📁 config/             # Database & external service configs
│   ├── 📁 controllers/        # Route controllers
│   ├── 📁 middleware/         # Custom middleware
│   ├── 📁 models/             # MongoDB models
│   ├── 📁 routes/             # API routes
│   ├── 📄 server.js           # Server entry point
│   ├── 📄 package.json        # Backend dependencies
│   └── 📄 example.env         # Environment template
│
├── 📁 frontend/               # Customer-facing app
│   ├── 📁 public/            # Static assets
│   ├── 📁 src/               # Source code
│   │   ├── 📁 assets/        # Images, icons
│   │   ├── 📁 components/    # Reusable components
│   │   ├── 📁 pages/         # Page components
│   │   ├── 📁 context/       # React context
│   │   ├── 📄 App.jsx        # Main app component
│   │   └── 📄 main.jsx       # App entry point
│   ├── 📄 package.json       # Frontend dependencies
│   └── 📄 example.env        # Environment template
│
├── 📁 admin/                  # Admin dashboard
│   ├── 📁 src/               # Source code
│   │   ├── 📁 assets/        # Admin assets
│   │   ├── 📁 components/    # Admin components
│   │   ├── 📁 pages/         # Admin pages
│   │   └── 📄 App.jsx        # Admin app component
│   ├── 📄 package.json       # Admin dependencies
│   └── 📄 example.env        # Environment template
│
├── 📄 README.md              # Project documentation
├── 📄 API_DOCUMENTATION.md   # API endpoints guide
├── 📄 COMPONENT_DOCUMENTATION.md # Component guide
├── 📄 DEPLOYMENT_GUIDE.md    # Deployment instructions
├── 📄 ENVIRONMENT_SETUP_GUIDE.md # Environment setup
├── 📄 PROJECT_DOCUMENTATION_FOR_MANAGEMENT.md # Business docs
└── 📄 .gitignore            # Git ignore rules
```

## ✨ Features

### Customer Frontend:
- 🏠 **Home Page**: Hero section, featured products, latest collections
- 🛍️ **Product Catalog**: Filtering, search, categories
- 🛒 **Shopping Cart**: Add/remove items, quantity management
- 📦 **Order Management**: Place orders, order tracking
- 👤 **User Authentication**: Login, register, profile management
- 📱 **Responsive Design**: Mobile-first, premium UI/UX

### Admin Dashboard:
- 📊 **Dashboard**: Sales overview, order statistics
- 📦 **Product Management**: Add, edit, delete products
- 📋 **Order Management**: View, update order status
- 🖼️ **Image Upload**: Cloudinary integration
- 👥 **User Management**: View customer data

### Backend API:
- 🔐 **Authentication**: JWT-based auth system
- 📦 **Product APIs**: CRUD operations
- 🛒 **Cart APIs**: Cart management
- 📋 **Order APIs**: Order processing
- ☁️ **File Upload**: Image upload to Cloudinary
- 🛡️ **Security**: Input validation, rate limiting

## 🔧 Troubleshooting

### Common Issues & Solutions:

#### 1. **Port Already in Use**
```bash
# Kill process using port 4000
npx kill-port 4000

# Or use different port in .env
PORT=4001
```

#### 2. **MongoDB Connection Error**
```bash
# Check if MongoDB is running
mongod --version

# Start MongoDB service
# Windows: net start MongoDB
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod
```

#### 3. **Dependencies Issues**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 4. **Environment Variables Not Loading**
- Ensure `.env` files are in correct directories
- Restart servers after changing environment variables
- Check for typos in variable names

#### 5. **CORS Errors**
- Verify `VITE_BACKEND_URL` in frontend/admin .env
- Check backend CORS configuration
- Ensure all services are running

#### 6. **Cloudinary Upload Issues**
- Verify Cloudinary credentials in backend .env
- Check image file size and format
- Ensure internet connectivity

## 🚀 Deployment

### Production Build:

```bash
# Build frontend
cd frontend
npm run build

# Build admin
cd ../admin
npm run build

# Prepare backend for production
cd ../backend
npm install --production
```

### Environment Configuration for Production:

Update your `.env` files for production:

**Backend:**
```env
NODE_ENV=production
PORT=4000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/shopkaro
CORS_ORIGIN=https://yourdomain.com
```

**Frontend:**
```env
VITE_BACKEND_URL=https://api.yourdomain.com
```

**Admin:**
```env
VITE_BACKEND_URL=https://api.yourdomain.com
```

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 📚 Additional Resources

- [API Documentation](./API_DOCUMENTATION.md) - Complete API reference
- [Component Documentation](./COMPONENT_DOCUMENTATION.md) - Frontend components guide
- [Environment Setup Guide](./ENVIRONMENT_SETUP_GUIDE.md) - Detailed environment configuration
- [Deployment Guide](./DEPLOYMENT_GUIDE.md) - Production deployment instructions

## 🤝 Support

If you encounter any issues:

1. Check this guide's troubleshooting section
2. Review the specific documentation files
3. Check the console for error messages
4. Ensure all prerequisites are installed
5. Verify environment variables are correctly set



---

*Built with ❤️ using the MERN Stack*