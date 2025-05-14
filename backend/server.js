const  express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const adminRoutes = require('./routes/adminRoutes');
const { errorhandler } = require('./middlewares/errorHandler');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('api/admin',adminRoutes); 

app.use(errorhandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT ,()=> console.log(`Server running on port : ${PORT}`));