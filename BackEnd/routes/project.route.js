const express = require("express");
const router = express.Router();
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/project.controller");

// Get all Projects
router.get("/", getProjects);

// Get single Project by id
router.get("/:id", getProject);

// Add new Project
router.post("/", createProject);

// Update Project by id
router.put("/:id", updateProject);

// Delete Project by id
router.delete("/:id", deleteProject);

module.exports = router;
