const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.googleLogin = async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const user = await User.findOneAndUpdate(
      { email },
      { $setOnInsert: { name, email } },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    if (!user) {
      return res.status(500).json({ success: false, message: "User creation failed" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
    );

    return res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      redirect: "/myaccount/dashboard",
    });
  } catch (err) {
    console.error("Google Login Error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
