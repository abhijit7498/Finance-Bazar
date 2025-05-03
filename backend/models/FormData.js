const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  name: String,
  gender: String,
  email: String,
  phone: String,
  checked: String,
  whatAppNotification: Boolean,
});

module.exports = mongoose.model("FormData", formDataSchema);
