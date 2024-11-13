const express = require("express");
const router = express.Router();
const {
  getPublications,
  getPublication,
  createPublication,
  updatePublication,
  deletePublication,
} = require("../controllers/publication.controller");

// Get all Publications
router.get("/", getPublications);

// Get single Publication by id
router.get("/:id", getPublication);

// Add new Publication
router.post("/", createPublication);

// Update Publication by id
router.put("/:id", updatePublication);

// Delete Publication by id
router.delete("/:id", deletePublication);

module.exports = router;
