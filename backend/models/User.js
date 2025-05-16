// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  gender: String,
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  whatAppNotification: String,
  dob: String,
  pinCode: String,
  pan: String,
  authProvider: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
