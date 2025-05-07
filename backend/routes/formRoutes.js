const express = require("express");
const router = express.Router();

const formController = require("../controllers/formController");
const auth = require("../middlewares/authMiddleware");

// POST: Add user form data
router.post("/add-user", formController.submitForm);

// GET: Get user data (requires valid JWT in Authorization header)
router.get("/get-user", auth, formController.getUserForm);

// PUT: Update user data (requires valid JWT in Authorization header)
router.put("/update-user", auth, formController.updateUserForm);

module.exports = router;
