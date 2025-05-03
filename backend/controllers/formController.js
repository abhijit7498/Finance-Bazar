const userData = require("../models/userData");

// POST /api/form
exports.submitForm = async (req, res) => {
  try {
    const { email, phone } = req.body;

    // Check if user already exists
    const existingUser = await userData.findOne({
      $or: [{ email }, { phone }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Save new user
    const data = new userData(req.body);
    const savedData = await data.save();

    // Return only the MongoDB _id
    res.status(201).json({ message: "Form data saved successfully.", id: savedData._id });

  } catch (err) {
    res.status(500).json({ error: "Failed to save form data.", details: err });
  }
};

// GET /api/form
exports.getUserForm = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];

    if (!userId) {
      return res.status(400).json({ error: "Missing user ID in headers" });
    }

    const user = await userData.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch form data.", details: err });
  }
};


// UPDATE /api/form
exports.updateUserForm = async (req, res) => {
  try {
    const userId = req.headers["x-user-id"];

    if (!userId) {
      return res.status(400).json({ error: "Missing user ID in headers" });
    }

    const updatedData = req.body;

    const user = await userData.findByIdAndUpdate(userId, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User data updated successfully", data: user });

  } catch (err) {
    res.status(500).json({ error: "Failed to update form data.", details: err });
  }
};