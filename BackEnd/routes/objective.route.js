const express = require("express");
const router = express.Router();
const {
  getObjectives,
  getObjective,
  createObjective,
  updateObjective,
  deleteObjective,
} = require("../controllers/objective.controller");

// Get all Objectives
router.get("/", getObjectives);

// Get single Objective by id
router.get("/:id", getObjective);

// Add new Objective
router.post("/", createObjective);

// Update Objective by id
router.put("/:id", updateObjective);

// Delete Objective by id
router.delete("/:id", deleteObjective);

module.exports = router;
