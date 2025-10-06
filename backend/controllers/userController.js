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

        // Check if user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Create and send token
        const token = createToken(user._id);
        res.json({ success: true, token, user: { id: user._id, name: user.name, email: user.email } });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

// User registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        //validate email format
        if(!validator.isEmail(email)){
            return res.status(400).json({ message: 'Invalid email format' });
        }

        //validate password strength
        if(!validator.isStrongPassword(password)){
            return res.status(400).json({ message: 'Weak password. It should be at least 8 characters long and include a mix of letters, numbers, and symbols.' });
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
        res.status(500).json({ message: error.message });
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

export { loginUser, registerUser, adminLogin };