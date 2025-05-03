require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // ⬅️ Add this
const otpRoutes = require('./routes/otpRoutes');
const formRoutes = require('./routes/formRoutes'); // ⬅️ Add this

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', otpRoutes);
app.use('/api', formRoutes);

app.get('/', (req, res) => {
    res.send('Backend is running.');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => console.error("MongoDB connection error:", err));
