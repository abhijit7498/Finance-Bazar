// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

// Import routes
const otpRoutes = require('./routes/otpRoutes');
const formRoutes = require('./routes/formRoutes'); 
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', otpRoutes);
app.use('/api', formRoutes);
app.use('/api', authRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Backend is running.');
});

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("MONGO_URI is not defined in the .env file");
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
