const express = require("express");
const router = express.Router();
const {
  getAwards,
  getAward,
  createAward,
  updateAward,
  deleteAward,
} = require("../controllers/award.controller");

// Get all Awards
router.get("/", getAwards);

// Get single Award by id
router.get("/:id", getAward);

// Add new Award
router.post("/", createAward);

// Update Award by id
router.put("/:id", updateAward);

// Delete Award by id
router.delete("/:id", deleteAward);

module.exports = router;
