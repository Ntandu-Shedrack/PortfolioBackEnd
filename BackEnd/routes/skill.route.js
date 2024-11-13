const express = require("express");
const router = express.Router();
const {
  getSkills,
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skill.controller");

// Get all Skills
router.get("/", getSkills);

// Get single Skill by id
router.get("/:id", getSkill);

// Add new Skill
router.post("/", createSkill);

// Update Skill by id
router.put("/:id", updateSkill);

// Delete Skill by id
router.delete("/:id", deleteSkill);

module.exports = router;
