# Deployment Guide - Forever Fashion E-commerce

## Overview
This guide provides step-by-step instructions for deploying the Forever Fashion e-commerce platform to various hosting providers including Vercel, Netlify, Heroku, and AWS.

## Prerequisites

### Development Requirements
- Node.js (v18 or higher)
- npm or yarn package manager
- Git version control
- MongoDB database (local or cloud)

### Production Requirements
- Cloud database (MongoDB Atlas recommended)
- Cloud storage (Cloudinary for images)
- Domain name (optional)
- SSL certificate (handled by hosting providers)

## Environment Configuration

### Environment Variables

#### Backend (.env)
```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce
MONGODB_URI_LOCAL=mongodb://localhost:27017/ecommerce

# Authentication
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# Server Configuration
PORT=5000
NODE_ENV=production

# CORS Configuration
FRONTEND_URL=https://your-frontend-domain.com
ADMIN_URL=https://your-admin-domain.com

# Payment Gateway (if implemented)
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email Service (if implemented)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

#### Frontend (.env)
```env
# API Configuration
VITE_API_URL=https://your-backend-domain.com/api
VITE_BACKEND_URL=https://your-backend-domain.com

# Environment
VITE_NODE_ENV=production

# Analytics (optional)
VITE_GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX

# Sentry Error Tracking (optional)
VITE_SENTRY_DSN=https://your-sentry-dsn
```

#### Admin Panel (.env)
```env
# API Configuration
VITE_API_URL=https://your-backend-domain.com/api
VITE_BACKEND_URL=https://your-backend-domain.com

# Environment
VITE_NODE_ENV=production
```

## Build Commands

### Backend
```bash
# Install dependencies
npm install

# Build (if using TypeScript or build process)
npm run build

# Start production server
npm start

# Development server
npm run dev
```

### Frontend
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build
npm run preview

# Development server
npm run dev
```

### Admin Panel
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment Options

### Option 1: Vercel Deployment

#### Backend Deployment (Vercel Functions)
1. **Prepare the backend for Vercel:**
```javascript
// api/index.js (or vercel-entry.js)
const app = require('../server');

module.exports = app;
```

2. **Create vercel.json:**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/server.js"
    }
  ],
  "env": {
    "MONGODB_URI": "@mongodb_uri",
    "JWT_SECRET": "@jwt_secret",
    "CLOUDINARY_CLOUD_NAME": "@cloudinary_cloud_name",
    "CLOUDINARY_API_KEY": "@cloudinary_api_key",
    "CLOUDINARY_API_SECRET": "@cloudinary_api_secret"
  }
}
```

3. **Deploy to Vercel:**
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Frontend Deployment (Vercel)
```bash
# From frontend directory
vercel --prod
```

### Option 2: Netlify Deployment

#### Frontend Deployment
1. **Create netlify.toml:**
```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
```

2. **Deploy:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Option 3: Railway Deployment

#### Backend Deployment
1. **Create railway.json:**
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "healthcheckPath": "/api/health"
  }
}
```

2. **Deploy:**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
railway up
```

### Option 4: Heroku Deployment

#### Backend Deployment
1. **Create Procfile:**
```
web: npm start
```

2. **Create package.json scripts:**
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "npm install"
  }
}
```

3. **Deploy:**
```bash
# Install Heroku CLI
# Create Heroku app
heroku create your-app-name

# Set environment variables
heroku config:set MONGODB_URI="your-mongodb-uri"
heroku config:set JWT_SECRET="your-jwt-secret"

# Deploy
git push heroku main
```

### Option 5: AWS Deployment

#### Backend (AWS Elastic Beanstalk)
1. **Create .ebextensions/01-node-command.config:**
```yaml
option_settings:
  aws:elasticbeanstalk:container:nodejs:
    NodeCommand: "npm start"
  aws:elasticbeanstalk:application:environment:
    PORT: 8080
```

2. **Deploy:**
```bash
# Install EB CLI
pip install awsebcli

# Initialize
eb init

# Create environment
eb create production

# Deploy
eb deploy
```

#### Frontend (AWS S3 + CloudFront)
1. **Build and deploy:**
```bash
# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## Database Setup

### MongoDB Atlas
1. **Create cluster:**
   - Sign up at mongodb.com/cloud/atlas
   - Create a new cluster
   - Set up database access credentials
   - Configure network access (IP whitelist)

2. **Get connection string:**
```
mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority
```

3. **Create collections:**
```javascript
// Collections will be created automatically by Mongoose
// But you can create them manually:
db.createCollection("users")
db.createCollection("products")
db.createCollection("orders")
```

## CI/CD Setup

### GitHub Actions

#### Backend CI/CD (.github/workflows/backend.yml)
```yaml
name: Backend CI/CD

on:
  push:
    branches: [ main ]
    paths: [ 'backend/**' ]
  pull_request:
    branches: [ main ]
    paths: [ 'backend/**' ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        cache-dependency-path: backend/package-lock.json

    - name: Install dependencies
      run: |
        cd backend
        npm ci

    - name: Run tests
      run: |
        cd backend
        npm test

    - name: Deploy to production
      if: github.ref == 'refs/heads/main'
      run: |
        # Add deployment commands
        echo "Deploying to production"
```

#### Frontend CI/CD (.github/workflows/frontend.yml)
```yaml
name: Frontend CI/CD

on:
  push:
    branches: [ main ]
    paths: [ 'frontend/**' ]
  pull_request:
    branches: [ main ]
    paths: [ 'frontend/**' ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        cache-dependency-path: frontend/package-lock.json

    - name: Install dependencies
      run: |
        cd frontend
        npm ci

    - name: Build
      run: |
        cd frontend
        npm run build
      env:
        VITE_API_URL: ${{ secrets.VITE_API_URL }}

    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
        working-directory: frontend
```

## Domain Configuration

### Custom Domain Setup
1. **Purchase domain** from registrar (GoDaddy, Namecheap, etc.)

2. **Configure DNS:**
```
Type    Name    Value
A       @       192.0.2.1 (your server IP)
CNAME   www     yourdomain.com
CNAME   api     your-backend-domain.com
CNAME   admin   your-admin-domain.com
```

3. **SSL Certificate:**
   - Most hosting providers handle this automatically
   - For custom setups, use Let's Encrypt

## Performance Optimization

### CDN Setup
```javascript
// In your build process
const cdnUrls = {
  images: 'https://cdn.yourdomain.com/images/',
  assets: 'https://cdn.yourdomain.com/assets/',
  api: 'https://api.yourdomain.com'
};
```

### Caching Strategy
```javascript
// Express.js caching
app.use('/api/products', (req, res, next) => {
  res.set('Cache-Control', 'public, max-age=300'); // 5 minutes
  next();
});

// Static assets caching
app.use('/static', express.static('public', {
  maxAge: '1y'
}));
```

## Monitoring and Analytics

### Error Tracking (Sentry)
```javascript
// Frontend
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: process.env.VITE_SENTRY_DSN,
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
});

// Backend
const Sentry = require('@sentry/node');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});
```

### Analytics (Google Analytics)
```javascript
// Frontend
import { gtag } from 'ga-gtag';

gtag('config', process.env.VITE_GOOGLE_ANALYTICS_ID, {
  page_title: document.title,
  page_location: window.location.href,
});
```

## Security Configuration

### Headers Security
```javascript
// Express.js security headers
const helmet = require('helmet');

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://apis.google.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:", "https://res.cloudinary.com"],
    },
  },
}));
```

### Rate Limiting
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

## Backup Strategy

### Database Backups
```bash
# MongoDB backup
mongodump --uri="mongodb+srv://username:password@cluster.mongodb.net/ecommerce" --out=./backup

# Automated backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
mongodump --uri="$MONGODB_URI" --out="./backups/backup_$DATE"
```

### File Backups
```bash
# S3 backup
aws s3 sync ./uploads s3://your-backup-bucket/uploads/
```

## Health Checks

### Backend Health Check
```javascript
// health.js
app.get('/api/health', (req, res) => {
  const healthCheck = {
    uptime: process.uptime(),
    timestamp: Date.now(),
    status: 'OK',
    database: 'connected', // Check DB connection
    memory: process.memoryUsage(),
  };

  res.status(200).json(healthCheck);
});
```

### Monitoring Script
```bash
#!/bin/bash
# health-check.sh
curl -f http://localhost:5000/api/health || exit 1
```

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version
npm --version
```

#### Database Connection Issues
```javascript
// Test MongoDB connection
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
```

#### CORS Issues
```javascript
// Configure CORS properly
const cors = require('cors');

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://yourdomain.com',
    'https://admin.yourdomain.com'
  ],
  credentials: true
}));
```

## Rollback Strategy

### Quick Rollback
```bash
# Git rollback
git revert HEAD
git push origin main

# Vercel rollback
vercel --prod --confirm

# Heroku rollback
heroku rollback v123
```

This deployment guide provides comprehensive instructions for deploying the Forever Fashion e-commerce platform. Choose the deployment option that best fits your needs and budget.