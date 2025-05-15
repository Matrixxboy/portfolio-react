const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')

exports.protect = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startswith('Bearer')
    ) {
        try {
            token = req.header.authorization.split(' ')[1];
            const decode = jwt.verify(token, process.env.JWT_TOKEN);
            req.admin = await Admin.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not Authorized , token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized , np token' });
    }
};
