import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1] || req.headers.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'No token provided. Please include Authorization header.'
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({
                success: false,
                message: 'Access denied. Admins only.'
            });
        }
        req.admin = decoded; // Store admin info for use in controllers
        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                success: false,
                message: 'Invalid token format'
            });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: 'Token expired'
            });
        }
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export default adminAuth;