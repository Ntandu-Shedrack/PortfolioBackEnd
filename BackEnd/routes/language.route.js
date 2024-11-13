const express = require("express");
const router = express.Router();
const {
  getLanguages,
  getLanguage,
  createLanguage,
  updateLanguage,
  deleteLanguage,
} = require("../controllers/language.controller");

// Get all Languages
router.get("/", getLanguages);

// Get single Language by id
router.get("/:id", getLanguage);

// Add new Language
router.post("/", createLanguage);

// Update Language by id
router.put("/:id", updateLanguage);

// Delete Language by id
router.delete("/:id", deleteLanguage);

module.exports = router;
