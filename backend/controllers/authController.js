// controllers/authController.js

const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.googleLogin = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Token is required" });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email } = payload;

    if (!email) {
      return res.status(400).json({ message: "Invalid token payload" });
    }

    // Check if the user exists by email
    let user = await User.findOne({ email });

    // Only create new user with email
    if (!user) {
      user = new User({
        email,
        authProvider: "google",
      });
      await user.save();
    }

    // Generate JWT
    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return res.status(200).json({
      message: "Login success",
      token: jwtToken,
      user,
    });
  } catch (err) {
    console.error("Google login error:", err);
    return res.status(401).json({ message: "Invalid token" });
  }
};
