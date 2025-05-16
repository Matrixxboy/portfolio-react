const Admin = require('../models/Admin');
const generateToken = require('../utils/generateToken');

exports.registerAdmin = async (req, res) => {
    const { username, password } = req.body;

    const adminExists = await Admin.findOne({ username });
    if (adminExists) {
        return res.status(400).json({ message: 'Admin already exists' });
    }

    const admin = new Admin({ username, password });
    await admin.save();

    res.status(201).json({
        _id: admin._id,
        username: admin.username,
        token: generateToken(admin._id),
    });
};


exports.loginAdmin = async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });

    if (admin && (await admin.matchPassword(password))) {
        res.json({
            _id: admin._id,
            username: admin.username,
            token: generateToken(admin._id)
        });
    } else {
        res.status(401).json({ message: 'Invalid Username and password' })
    }
};

exports.getAdminDashboard = (req, res) => {
    res.json({ message: 'welcome to the Admin Dashboard' });
};