const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const adminRoutes = require('./routes/adminRoutes');
const { errorHandler } = require('./middlewares/errorHandler');
const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route Not Found' });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));