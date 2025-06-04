const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const adminUser = require('../config/adminData');

exports.loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    if (
        username === adminUser.username &&
        bcrypt.compareSync(password, adminUser.passwordHash)
    ) {
        // Create token
        const token = jwt.sign(
            { username: adminUser.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
};

exports.getAdminDashboard = (req, res) => {
    res.json({ message: 'Welcome to the Admin Dashboard' });
};
