const express = require('express');
const router = express.Router();
const { loginAdmin, getAdminDashboard } = require('../controllers/adminController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/login', loginAdmin);
router.get('/dashboard', protect, getAdminDashboard);

module.exports = router;
