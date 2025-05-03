// models/FormData.js
const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  name: String,
  gender: String,
  email: String,
  phone: String,
  whatAppNotification: Boolean,
  dob: String,
  pinCode: String,
  pan: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("userData", formDataSchema);
