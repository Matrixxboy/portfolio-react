const bcrypt = require('bcryptjs');

const adminUser = {
    username: 'admin',
    // hash for password 'admin123'
    passwordHash: bcrypt.hashSync('admin123', 10),
};

module.exports = adminUser;
    