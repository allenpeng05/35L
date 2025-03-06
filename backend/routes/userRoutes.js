// 📂 routes/userRoutes.js
const express = require("express");
const { registerUser, updateUser, loginUser } = require("../controllers/userController");

const router = express.Router();

// Registration endpoint
router.post("/register", registerUser);

// Login endpoint
router.post("/login", loginUser);

// Update user endpoint
router.put("/users/:id", updateUser);

module.exports = router;
