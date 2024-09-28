const express = require('express');
const connectDB = require('./config/db');
const balanceRoute = require('./routes/balanceRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', balanceRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
