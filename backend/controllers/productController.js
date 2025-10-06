import { v2 as cloudinary } from 'cloudinary';
import { json } from 'express';
import ProductModel from '../models/productModel.js';

//Add Product
const addProduct = async (req, res) => {
    try {
        console.log('Add Product Request Body:', req.body);
        console.log('Add Product Files:', req.files);

        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        // Validate required fields
        if (!name || !description || !price || !category || !subCategory || !sizes) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required: name, description, price, category, subCategory, sizes'
            });
        }

        // Handle images
        const image1 = req.files['image1'] && req.files['image1'][0] ? req.files['image1'][0].path : null;
        const image2 = req.files['image2'] && req.files['image2'][0] ? req.files['image2'][0].path : null;
        const image3 = req.files['image3'] && req.files['image3'][0] ? req.files['image3'][0].path : null;
        const image4 = req.files['image4'] && req.files['image4'][0] ? req.files['image4'][0].path : null;

        const images = [image1, image2, image3, image4].filter(item => item !== null);

        if (images.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'At least one product image is required'
            });
        }

        console.log('Images to upload:', images);

        let imagesUrl = await Promise.all(images.map(async (image) => {
            try {
                const result = await cloudinary.uploader.upload(image, {
                    folder: 'e-commerce'
                });
                return result.secure_url;
            } catch (uploadError) {
                console.error('Cloudinary upload error:', uploadError);
                throw new Error(`Failed to upload image: ${uploadError.message}`);
            }
        }));

        console.log('Uploaded image URLs:', imagesUrl);

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === 'true' ? true : false,
            image: imagesUrl,
            date: Date.now()
        };

        console.log('Product data to save:', productData);

        // Create new product
        const newProduct = new ProductModel(productData);
        await newProduct.save();

        console.log('Product saved successfully:', newProduct._id);

        res.status(201).json({
            success: true,
            message: 'Product added successfully',
            product: newProduct
        });
    } catch (error) {
        console.error('Add Product Error:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to add product'
        });
    }
}

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.error("Error in getAllProducts:", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}// Get product by ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.body;

        // Check if ID is provided
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Product ID is required in request body'
            });
        }

        // Check if ID is a valid MongoDB ObjectId format
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid product ID format'
            });
        }

        const product = await ProductModel.findById(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        res.json({ success: true, product });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
// Update product
const updateProduct = async (req, res) => {
    try {
        const { id, name, description, price, category, images } = req.body;

        // Check if ID is provided
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Product ID is required in request body'
            });
        }

        // Check if ID is a valid MongoDB ObjectId format
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid product ID format'
            });
        }

        // Validate product data
        if (!name || !description || !price || !category) {
            return res.status(400).json({
                success: false,
                message: 'All fields (name, description, price, category) are required'
            });
        }

        // Update product
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, {
            name,
            description,
            price,
            category,
            images
        }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        res.json({ success: true, product: updatedProduct });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// Delete product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.body;

        // Check if ID is provided
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Product ID is required in request body'
            });
        }

        // Check if ID is a valid MongoDB ObjectId format
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid product ID format'
            });
        }

        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        res.json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct };