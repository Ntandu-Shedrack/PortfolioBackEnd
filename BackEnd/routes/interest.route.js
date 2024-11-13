const express = require("express");
const router = express.Router();
const {
  getInterests,
  getInterest,
  createInterest,
  updateInterest,
  deleteInterest,
} = require("../controllers/interest.controller");

// Get all Interests
router.get("/", getInterests);

// Get single Interest by id
router.get("/:id", getInterest);

// Add new Interest
router.post("/", createInterest);

// Update Interest by id
router.put("/:id", updateInterest);

// Delete Interest by id
router.delete("/:id", deleteInterest);

module.exports = router;
