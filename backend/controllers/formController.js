const FormData = require("../models/FormData");

exports.submitForm = async (req, res) => {
  try {
    const data = new FormData(req.body);
    await data.save();
    res.status(201).json({ message: "Form data saved successfully." });
  } catch (err) {
    res.status(500).json({ error: "Failed to save form data.", details: err });
  }
};

// Optional: get recent submissions
exports.getAllForms = async (req, res) => {
  try {
    const forms = await FormData.find().sort({ createdAt: -1 }); // recent first
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch form data." });
  }
};
