const express = require("express");
const router = express.Router();
const {
  getReferences,
  getReference,
  createReference,
  updateReference,
  deleteReference,
} = require("../controllers/reference.controller");

// Get all References
router.get("/", getReferences);

// Get single Reference by id
router.get("/:id", getReference);

// Add new Reference
router.post("/", createReference);

// Update Reference by id
router.put("/:id", updateReference);

// Delete Reference by id
router.delete("/:id", deleteReference);

module.exports = router;
