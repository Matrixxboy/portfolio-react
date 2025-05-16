const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

exports.protect = async (req, res, next) => {
    let token;

    // ✅ Check for token in Authorization header
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // ✅ Extract token from header
            token = req.headers.authorization.split(' ')[1];

            // ✅ Verify token
            const decoded = jwt.verify(token, process.env.JWT_TOKEN);

            // ✅ Attach admin to request
            req.admin = await Admin.findById(decoded.id).select('-password');

            return next(); // ✅ Continue to route
        } catch (error) {
            console.error("Token error:", error.message);
            return res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    // ❌ No token at all
    return res.status(401).json({ message: 'Not authorized, no token' });
};
