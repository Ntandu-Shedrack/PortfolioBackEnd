const express = require("express");
const router = express.Router();
const {
  getExperiences,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} = require("../controllers/experience.controller");

// Get all Experiences
router.get("/", getExperiences);

// Get single Experience by id
router.get("/:id", getExperience);

// Add new Experience
router.post("/", createExperience);

// Update Experience by id
router.put("/:id", updateExperience);

// Delete Experience by id
router.delete("/:id", deleteExperience);

module.exports = router;
