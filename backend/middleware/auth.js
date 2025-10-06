import jwt from 'jsonwebtoken';


const authUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1] || req.headers.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized user. No token provided.'
            });
        }

        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = token_decoded.id; // Changed from req.body.userId to req.userId

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Not authorized user. Invalid token.'
        });
    }
};

export default authUser;