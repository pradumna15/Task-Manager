const express = require("express");  // Changed to require
const { login, register } = require("../controllers/authController");  // Changed to require

const router = express.Router();

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

module.exports = router;  // Export the router
