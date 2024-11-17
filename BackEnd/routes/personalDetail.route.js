const express = require("express");
const router = express.Router();
const {
  getPersonalDetails,
  getPersonalDetail,
  createPersonalDetail,
  updatePersonalDetail,
  deletePersonalDetail,
} = require("../controllers/personalDetail.controller");

// Get all PersonalDetails
router.get("/", getPersonalDetails);

// Get single PersonalDetail by id
router.get("/:id", getPersonalDetail);

// Add new PersonalDetail
router.post("/", createPersonalDetail);

// Update PersonalDetail by id
router.put("/:id", updatePersonalDetail);

// Delete PersonalDetail by id
router.delete("/:id", deletePersonalDetail);

module.exports = router;
