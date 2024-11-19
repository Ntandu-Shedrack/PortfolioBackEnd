const express = require("express");
const router = express.Router();
const {
  getServices,
  getService,
  createService,
  updateService,
  deleteService,
} = require("../controllers/service.controller");

// Get all Services
router.get("/", getServices);

// Get single Service by id
router.get("/:id", getService);

// Add new Service
router.post("/", createService);

// Update Service by id
router.put("/:id", updateService);

// Delete Service by id
router.delete("/:id", deleteService);

module.exports = router;
