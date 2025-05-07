// models/FormData.js
const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  whatAppNotification: Boolean,
  dob: String,
  pinCode: String,
  pan: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", formDataSchema);
