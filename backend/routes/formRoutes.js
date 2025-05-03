const express = require("express");
const router = express.Router();
const { submitForm, getAllForms } = require("../controllers/formController");

router.post("/form", submitForm);
router.get("/form", getAllForms);

module.exports = router;
