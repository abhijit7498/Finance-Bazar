// models/FormData.js
const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  name: String,
  gender: String,
  email: {
    type: String,
    unique: true,
    sparse: true,
  },
  phone: {
    type: String,
    unique: true,
    sparse: true,
  },
  whatAppNotification: Boolean,
  dob: String,
  pinCode: String,
  pan: {
    type: String,
    unique: true,
    sparse: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", formDataSchema);
