require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const connectDB = require('./config/database');
connectDB();
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'vermeil123' // hardcoded
};

// Middleware: protect dashboard
function requireAuth(req, res, next) {
    const token = req.cookies.adminToken;
    if (token === 'secretToken') return next();
    res.redirect('/admin/login');
}

app.get('/', (req, res) => {
    res.render('admin-default', { error: null });
});

// Show login page
app.get('/admin/login', (req, res) => {
    res.render('admin-login', { error: null });
});

// Handle login
app.post('/admin/login', (req, res) => {
    const { username, password } = req.body;
    if (
        username === ADMIN_CREDENTIALS.username &&
        password === ADMIN_CREDENTIALS.password
    ) {
        res.cookie('adminToken', 'secretToken', { httpOnly: true });
        return res.redirect('/admin');
    }
    res.render('admin-login', { error: 'Invalid credentials' });
});

// Show dashboard (protected)
app.get('/admin', requireAuth, (req, res) => {
    res.render('admin-dashboard');
});

// Logout
app.get('/admin/logout', (req, res) => {
    res.clearCookie('adminToken');
    res.redirect('/admin/login');
});

app.listen(5000, () => {
    console.log('Admin panel running at http://localhost:5000/admin');
});
