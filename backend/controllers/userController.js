import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel.js';


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// User login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required' });
        }

        // Check if user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        // Create and send token
        const token = createToken(user._id);
        res.json({ success: true, token, user: { id: user._id, name: user.name, email: user.email } });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
}

// User registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate required fields
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists with this email' });
        }

        //validate email format
        if(!validator.isEmail(email)){
            return res.status(400).json({ success: false, message: 'Invalid email format' });
        }

        //validate password strength
        if(!validator.isStrongPassword(password)){
            return res.status(400).json({ success: false, message: 'Weak password. It should be at least 8 characters long and include a mix of letters, numbers, and symbols.' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword
        });
        const user = await newUser.save();

        // Create and send token
        const token = createToken(user._id);
        res.json({success: true, token, user: {id: user._id, name: user.name, email: user.email} });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
}

// Admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if admin credentials are valid
        if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ message: 'Invalid admin credentials' });
        }

        // Create and send token
        const token = jwt.sign({ email, password }, process.env.JWT_SECRET);
        res.json({ success: true, token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get user profile
const getUserProfile = async (req, res) => {
    try {
        const userId = req.userId; // This comes from the auth middleware

        // Find user by ID and exclude password
        const user = await UserModel.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                cartData: user.cartData,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt
            }
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// Update user profile
const updateUserProfile = async (req, res) => {
    try {
        const userId = req.userId; // This comes from the auth middleware
        const { name, email, phone, address } = req.body;

        // Find and update user
        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            {
                name,
                email,
                phone,
                address
            },
            { new: true, runValidators: true }
        ).select('-password');

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.json({
            success: true,
            message: 'Profile updated successfully',
            user: {
                id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                phone: updatedUser.phone,
                address: updatedUser.address
            }
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export { loginUser, registerUser, adminLogin, getUserProfile, updateUserProfile };