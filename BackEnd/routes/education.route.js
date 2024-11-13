const express = require("express");
const router = express.Router();
const {
  getEducations,
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} = require("../controllers/education.controller");

// Get all Educations
router.get("/", getEducations);

// Get single Education by id
router.get("/:id", getEducation);

// Add new Education
router.post("/", createEducation);

// Update Education by id
router.put("/:id", updateEducation);

// Delete Education by id
router.delete("/:id", deleteEducation);

module.exports = router;
