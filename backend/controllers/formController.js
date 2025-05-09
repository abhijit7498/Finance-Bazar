const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

// POST /api/form - Submit form and create user if not existing
exports.submitForm = async (req, res) => {
  try {
    const { email, phone } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const data = new User(req.body);
    const savedData = await data.save();

    const token = jwt.sign({ id: savedData._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    res.status(201).json({
      message: "Form data saved successfully.",
      id: savedData._id,
      token,
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to save form data.",
      details: err,
    });
  }
};

// GET /api/form - Get user data (protected)
exports.getUserForm = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch form data.",
      details: err,
    });
  }
};

// PUT /api/form - Update user data (protected)
exports.updateUserForm = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({
      message: "User data updated successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to update form data.",
      details: err,
    });
  }
};
