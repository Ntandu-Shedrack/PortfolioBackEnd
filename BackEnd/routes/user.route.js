const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

// Get all users
router.get("/", getUsers);

// Get single user by id
router.get("/:id", getUser);

// Add new user
router.post("/", createUser);

// Update user by id
router.put("/:id", updateUser);

// Delete user by id
router.delete("/:id", deleteUser);

module.exports = router;
