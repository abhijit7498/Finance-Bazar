const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");

// POST: submit form
router.post("/form", formController.submitForm);

// GET: fetch user by ID from token (x-user-id)
router.get("/form", formController.getUserForm);

// PUT: update user form data by ID from token (x-user-id)
router.put("/form", formController.updateUserForm);

module.exports = router;
