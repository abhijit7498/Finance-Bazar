const mongoose = require('mongoose');

const personalLoanSchema = new mongoose.Schema({
  employmentType: { type: String, required: true },
  incomeRange: { type: String, required: true },
  primaryBank: { type: String, required: true },
  companyName: { type: String, required: true },
  residenceCity: { type: String, required: true },
  annualIncome: { type: Number, required: true },
  loanAmount: { type: Number, required: true },
  currentEMI: { type: Number, required: true },
  mobileNo: { type: Number,  },// requre the mobile number after otp prob^ solve
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("personal-loan", personalLoanSchema);
